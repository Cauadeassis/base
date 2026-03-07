import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";
import database from "../../../infra/database";

export async function POST(request: NextRequest) {
  console.log(`POST iniciado!`)
  const { email, password } = await request.json();
  if (email) console.log(`Email captado: ${email}`);
  if (password) console.log(`Password captada: ${password}`);
  const hashedPassword = await hash(password, 10);
  console.log(`Password criptografada: ${hashedPassword}`)

  try {
    await database.query({
      text: "INSERT INTO users (email, password) VALUES ($1, $2)",
      values: [email, hashedPassword],
    });
  } catch (error: any) {
    if (error.code === "23505") {
      return NextResponse.json({ error: "Email já cadastrado" }, { status: 409 });
    }
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }

  return NextResponse.json({ message: "Conta criada!" }, { status: 201 });
}
