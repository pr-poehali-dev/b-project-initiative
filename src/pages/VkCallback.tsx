import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVkAuth } from '@/components/extensions/vk-auth/useVkAuth';
import Icon from '@/components/ui/icon';

const VK_AUTH_URL = 'https://functions.poehali.dev/683eadf6-1a32-4071-8fc3-06e3737c2a4e';

const VkCallback = () => {
  const navigate = useNavigate();
  const auth = useVkAuth({
    apiUrls: {
      authUrl: `${VK_AUTH_URL}?action=auth-url`,
      callback: `${VK_AUTH_URL}?action=callback`,
      refresh: `${VK_AUTH_URL}?action=refresh`,
      logout: `${VK_AUTH_URL}?action=logout`,
    },
  });

  useEffect(() => {
    auth.handleCallback().then((success) => {
      if (success) {
        navigate('/');
      } else {
        navigate('/auth');
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Icon name="Loader2" size={32} className="text-white animate-spin" />
        </div>
        <h2 className="text-2xl font-heading font-bold mb-2">
          Авторизация через VK
        </h2>
        <p className="text-muted-foreground">
          Пожалуйста, подождите...
        </p>
      </div>
    </div>
  );
};

export default VkCallback;
