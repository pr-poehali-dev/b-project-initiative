import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const categories = ['Все статьи', 'Разработка', 'Дизайн', 'Маркетинг', 'Продуктивность'];

const blogPosts = [
  {
    id: 1,
    title: 'Современные тренды веб-разработки в 2024',
    excerpt: 'Исследуем актуальные технологии и подходы, которые изменят индустрию в ближайшие годы',
    image: 'https://cdn.poehali.dev/projects/9296bff5-8814-493a-a222-b3f4da9d46a0/files/384a68a2-0697-428d-ae68-c389c3c311ef.jpg',
    category: 'Разработка',
    date: '15 января 2024',
    readTime: '8 мин',
    featured: true,
  },
  {
    id: 2,
    title: 'Как создать идеальный дизайн-система',
    excerpt: 'Пошаговое руководство по построению масштабируемой системы компонентов для вашего проекта',
    image: 'https://cdn.poehali.dev/projects/9296bff5-8814-493a-a222-b3f4da9d46a0/files/0ca6f039-dd15-47eb-bdd9-2b9120861fb2.jpg',
    category: 'Дизайн',
    date: '12 января 2024',
    readTime: '6 мин',
    featured: false,
  },
  {
    id: 3,
    title: 'SEO-оптимизация: полное руководство',
    excerpt: 'Все, что нужно знать о поисковой оптимизации для продвижения вашего сайта',
    image: 'https://cdn.poehali.dev/projects/9296bff5-8814-493a-a222-b3f4da9d46a0/files/aa31fde4-1cae-44f6-966c-fa8fed2dd0f9.jpg',
    category: 'Маркетинг',
    date: '10 января 2024',
    readTime: '10 мин',
    featured: false,
  },
  {
    id: 4,
    title: '10 советов для повышения продуктивности',
    excerpt: 'Проверенные методы и инструменты для эффективной работы над проектами',
    image: 'https://cdn.poehali.dev/projects/9296bff5-8814-493a-a222-b3f4da9d46a0/files/aa31fde4-1cae-44f6-966c-fa8fed2dd0f9.jpg',
    category: 'Продуктивность',
    date: '8 января 2024',
    readTime: '5 мин',
    featured: false,
  },
  {
    id: 5,
    title: 'React 19: что нового?',
    excerpt: 'Обзор ключевых изменений и новых возможностей последней версии React',
    image: 'https://cdn.poehali.dev/projects/9296bff5-8814-493a-a222-b3f4da9d46a0/files/384a68a2-0697-428d-ae68-c389c3c311ef.jpg',
    category: 'Разработка',
    date: '5 января 2024',
    readTime: '7 мин',
    featured: false,
  },
  {
    id: 6,
    title: 'Психология цвета в UI дизайне',
    excerpt: 'Как правильно выбрать цветовую палитру для создания эмоциональной связи с пользователями',
    image: 'https://cdn.poehali.dev/projects/9296bff5-8814-493a-a222-b3f4da9d46a0/files/0ca6f039-dd15-47eb-bdd9-2b9120861fb2.jpg',
    category: 'Дизайн',
    date: '3 января 2024',
    readTime: '6 мин',
    featured: false,
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все статьи');
  
  const filteredPosts = selectedCategory === 'Все статьи' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                БлогHub
              </h1>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Главная
              </Link>
              <Link to="/categories" className="text-foreground hover:text-primary transition-colors font-medium">
                Категории
              </Link>
              <Link to="/auth">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Icon name="UserCircle" size={16} className="mr-2" />
                  Войти
                </Button>
              </Link>
            </nav>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Истории, которые вдохновляют
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Открывайте новые идеи, делитесь опытом и развивайтесь вместе с нашим сообществом
            </p>
          </div>

          {featuredPost && (
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in border-0 bg-gradient-to-br from-card to-muted/30">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-semibold">
                    Популярное
                  </Badge>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-primary/10 text-primary border-0">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button size="lg" className="w-fit bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Читать статью
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-heading font-bold">Последние публикации</h3>
            <Link to="/categories" className="text-primary hover:underline flex items-center gap-1">
              Все категории
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' 
                  : 'hover:border-primary hover:text-primary'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 bg-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-primary/10 text-primary border-0">
                    {post.category}
                  </Badge>
                  <h4 className="text-xl font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t bg-card/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Sparkles" size={18} className="text-white" />
                </div>
                <span className="font-heading font-bold text-lg">БлогHub</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для публикации статей и обмена идеями
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Разделы</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Главная</Link></li>
                <li><Link to="/categories" className="hover:text-primary transition-colors">Категории</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Категории</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {categories.slice(1).map(cat => (
                  <li key={cat}><Link to="/categories" className="hover:text-primary transition-colors">{cat}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Социальные сети</h5>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary">
                  <Icon name="Instagram" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 БлогHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;