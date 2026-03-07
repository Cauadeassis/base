"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import EmailField from "../components/emailField";
import PasswordField from "../components/passwordField";

type Step =
  | "login"
  | "forgotPassword"
  | "verifyingCode"
  | "newPassword"
  | "success";

export default function Login() {
  const [step, setStep] = useState<Step>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.body}>
      <div className={styles.siteContent}>
        <header>
        </header>

        <main>
          <form>
            {step === "login" && (
              <>
                <EmailField value={email} onChange={setEmail} />

                <PasswordField value={password} onChange={setPassword} />

                <button
                  type="button"
                  className={styles.forgotPassword}
                  onClick={() => setStep("forgotPassword")}
                >
                  Esqueceu a senha?
                </button>

                <button type="submit" className={styles.mainButton}>
                  Entrar
                </button>
              </>
            )}

            {step === "forgotPassword" && (
              <>
                <EmailField value={email} onChange={setEmail} />

                <button
                  type="button"
                  onClick={() => setStep("verifyingCode")}
                  className={styles.mainButton}
                >
                  Enviar código
                </button>
              </>
            )}

            {step === "verifyingCode" && (
              <>
                <label>
                  Código de verificação
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={5}
                    placeholder="12345"
                    required
                  />
                </label>

                <button
                  type="button"
                  onClick={() => setStep("newPassword")}
                  className={styles.mainButton}
                >
                  Verificar código
                </button>
              </>
            )}

            {step === "newPassword" && (
              <>
                <PasswordField value={password} onChange={setPassword} />

                <button
                  type="button"
                  onClick={() => setStep("success")}
                  className={styles.mainButton}
                >
                  Criar nova senha
                </button>
              </>
            )}

            {step === "success" && (
              <>
                <p>Senha redefinida com sucesso 🎉</p>

                <button
                  type="button"
                  onClick={() => setStep("login")}
                  className={styles.mainButton}
                >
                  Voltar para login
                </button>
              </>
            )}
          </form>
        </main>
      </div>
    </div>
  );
}
