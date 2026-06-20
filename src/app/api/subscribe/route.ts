import { NextRequest, NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    // Forward al Google Apps Script existente
    const sheetUrl = process.env.SHEET_URL;
    if (sheetUrl) {
      await fetch(`${sheetUrl}?email=${encodeURIComponent(email)}`, {
        method: "GET",
      });
    }

    // TODO: Guardar en Supabase tabla subscribers cuando esté configurado
    // const supabase = createClient();
    // await supabase.from("subscribers").upsert({ email });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
