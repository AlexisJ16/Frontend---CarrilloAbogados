import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  nombre: string;
  email: string;
  telefono?: string;
  servicio?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, '').trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactFormData;
    const { nombre, email, telefono, servicio } = body;

    // Validation
    if (!nombre || !email) {
      return NextResponse.json(
        { error: 'Nombre y email son obligatorios.' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Email inválido.' },
        { status: 400 }
      );
    }

    if (nombre.length > 200 || email.length > 200) {
      return NextResponse.json(
        { error: 'Datos demasiado largos.' },
        { status: 400 }
      );
    }

    const sanitizedData = {
      nombre: sanitize(nombre),
      email: sanitize(email),
      telefono: telefono ? sanitize(telefono) : '',
      servicio: servicio ? sanitize(servicio) : '',
    };

    // Option A: Resend (if RESEND_API_KEY is configured)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || 'Carrillo Abogados <onboarding@resend.dev>',
          to: [process.env.CONTACT_EMAIL || 'asesora@carrilloabgd.com'],
          subject: `Nuevo lead: ${sanitizedData.nombre}`,
          html: `
            <h2>Nuevo contacto desde la landing page</h2>
            <p><strong>Nombre:</strong> ${sanitizedData.nombre}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Teléfono:</strong> ${sanitizedData.telefono || 'No proporcionado'}</p>
            <p><strong>Servicio de interés:</strong> ${sanitizedData.servicio || 'No especificado'}</p>
            <hr />
            <p style="color: #888; font-size: 12px;">Enviado desde carrilloabgd.com</p>
          `,
        }),
      });

      if (!resendResponse.ok) {
        console.error('Resend error:', await resendResponse.text());
        return NextResponse.json(
          { error: 'Error al enviar el mensaje. Intente de nuevo.' },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, method: 'email' });
    }

    // Fallback: Log to console (useful for development and Vercel logs)
    console.log('=== NEW CONTACT LEAD ===');
    console.log(JSON.stringify(sanitizedData, null, 2));
    console.log('========================');

    return NextResponse.json({ success: true, method: 'logged' });
  } catch {
    return NextResponse.json(
      { error: 'Error interno del servidor.' },
      { status: 500 }
    );
  }
}
