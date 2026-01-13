import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LoginForm } from '@/components/extensions/auth-email/LoginForm';
import { RegisterForm } from '@/components/extensions/auth-email/RegisterForm';
import { useAuth } from '@/components/extensions/auth-email/useAuth';
import { VkLoginButton } from '@/components/extensions/vk-auth/VkLoginButton';
import { useVkAuth } from '@/components/extensions/vk-auth/useVkAuth';
import Icon from '@/components/ui/icon';

const AUTH_EMAIL_URL = 'https://functions.poehali.dev/a20688e0-5fbc-4f13-a957-f70305f6dac1';
const VK_AUTH_URL = 'https://functions.poehali.dev/683eadf6-1a32-4071-8fc3-06e3737c2a4e';

const Auth = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');

  const emailAuth = useAuth({
    apiUrls: {
      login: `${AUTH_EMAIL_URL}?action=login`,
      register: `${AUTH_EMAIL_URL}?action=register`,
      verifyEmail: `${AUTH_EMAIL_URL}?action=verify-email`,
      refresh: `${AUTH_EMAIL_URL}?action=refresh`,
      logout: `${AUTH_EMAIL_URL}?action=logout`,
      resetPassword: `${AUTH_EMAIL_URL}?action=reset-password`,
    },
  });

  const vkAuth = useVkAuth({
    apiUrls: {
      authUrl: `${VK_AUTH_URL}?action=auth-url`,
      callback: `${VK_AUTH_URL}?action=callback`,
      refresh: `${VK_AUTH_URL}?action=refresh`,
      logout: `${VK_AUTH_URL}?action=logout`,
    },
  });

  const handleSuccess = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="flex items-center gap-2 w-fit">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              БлогHub
            </h1>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold mb-2">
              Добро пожаловать!
            </h2>
            <p className="text-muted-foreground">
              Войдите или создайте аккаунт для продолжения
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="text-base">
                Вход
              </TabsTrigger>
              <TabsTrigger value="register" className="text-base">
                Регистрация
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-0">
              <LoginForm
                onLogin={emailAuth.login}
                onSuccess={handleSuccess}
                onRegisterClick={() => setActiveTab('register')}
                error={emailAuth.error}
                isLoading={emailAuth.isLoading}
              />
            </TabsContent>

            <TabsContent value="register" className="mt-0">
              <RegisterForm
                onRegister={emailAuth.register}
                onVerifyEmail={emailAuth.verifyEmail}
                onLogin={emailAuth.login}
                onSuccess={handleSuccess}
                onLoginClick={() => setActiveTab('login')}
                error={emailAuth.error}
                isLoading={emailAuth.isLoading}
              />
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background px-4 text-muted-foreground">
                  Или войти через
                </span>
              </div>
            </div>

            <div className="mt-6">
              <VkLoginButton
                onClick={vkAuth.login}
                isLoading={vkAuth.isLoading}
                className="w-full"
              />
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Продолжая, вы соглашаетесь с{' '}
            <Link to="/terms" className="text-primary hover:underline">
              условиями использования
            </Link>{' '}
            и{' '}
            <Link to="/privacy" className="text-primary hover:underline">
              политикой конфиденциальности
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Auth;
