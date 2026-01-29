import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useAdminLogin } from "@/hooks/connection-hook/admin-login-connection";
import { Loader2 } from "lucide-react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading, error, message } = useAdminLogin<{
    username: string;
    password: string;
  }>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await login({
      username,
      password,
    });

    // optional: redirect after login
    window.location.href = "/admin/dashboard";
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Selamat Datang</h1>
                <p className="text-muted-foreground text-balance">
                  Masuk Sebagai Admin Lumbung Mataraman
                </p>
              </div>

              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="lumbung-admin"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Field>

              {/* ERROR MESSAGE */}
              {error && (
                <FieldDescription className="text-center text-red-500">
                  {error}
                </FieldDescription>
              )}

              {/* SUCCESS MESSAGE */}
              {message && !error && (
                <FieldDescription className="text-center text-green-600">
                  {message}
                </FieldDescription>
              )}

              <Field>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Login
                </Button>
              </Field>

              <FieldDescription className="text-center">
                Anggit Suki Liar
              </FieldDescription>
            </FieldGroup>
          </form>

          <div className="bg-muted relative hidden md:block">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="/images/login-placeholder.jpg"
                alt="Image"
                className="object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}
        <span className="underline">Terms of Service</span> and{" "}
        <span className="underline">Privacy Policy</span>.
      </FieldDescription>
    </div>
  );
}
