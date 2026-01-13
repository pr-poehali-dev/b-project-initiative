import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const categoriesData = [
  {
    id: 1,
    name: 'Разработка',
    description: 'Статьи о программировании, фреймворках и технологиях',
    icon: 'Code',
    color: 'from-purple-500 to-purple-600',
    count: 24,
    featured: true,
  },
  {
    id: 2,
    name: 'Дизайн',
    description: 'UI/UX дизайн, визуальные тренды и творческие подходы',
    icon: 'Palette',
    color: 'from-pink-500 to-pink-600',
    count: 18,
    featured: true,
  },
  {
    id: 3,
    name: 'Маркетинг',
    description: 'Стратегии продвижения, SEO и аналитика',
    icon: 'TrendingUp',
    color: 'from-orange-500 to-orange-600',
    count: 15,
    featured: false,
  },
  {
    id: 4,
    name: 'Продуктивность',
    description: 'Инструменты и методы для эффективной работы',
    icon: 'Zap',
    color: 'from-yellow-500 to-yellow-600',
    count: 12,
    featured: false,
  },
  {
    id: 5,
    name: 'Бизнес',
    description: 'Предпринимательство, стартапы и управление проектами',
    icon: 'Briefcase',
    color: 'from-blue-500 to-blue-600',
    count: 21,
    featured: false,
  },
  {
    id: 6,
    name: 'Технологии',
    description: 'Новости техники, гаджеты и инновации',
    icon: 'Cpu',
    color: 'from-green-500 to-green-600',
    count: 16,
    featured: false,
  },
];

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCategories = categoriesData.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredCategories = filteredCategories.filter(cat => cat.featured);
  const regularCategories = filteredCategories.filter(cat => !cat.featured);

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
              <Link to="/categories" className="text-primary font-medium">
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
              Категории контента
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Найдите статьи по интересующей вас теме
            </p>
            
            <div className="max-w-md mx-auto relative">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск категории..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg border-2 focus-visible:ring-primary"
              />
            </div>
          </div>

          {featuredCategories.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-heading font-bold mb-6">Популярные категории</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredCategories.map((category, index) => (
                  <Card
                    key={category.id}
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border-0 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon name={category.icon as any} size={32} className="text-white" />
                        </div>
                        <Badge variant="secondary" className="text-sm">
                          {category.count} статей
                        </Badge>
                      </div>
                      <h4 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h4>
                      <p className="text-muted-foreground mb-6">
                        {category.description}
                      </p>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                        Смотреть статьи
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {regularCategories.length > 0 && (
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">Все категории</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularCategories.map((category, index) => (
                  <Card
                    key={category.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 bg-card animate-fade-in"
                    style={{ animationDelay: `${(featuredCategories.length + index) * 100}ms` }}
                  >
                    <div className={`h-1.5 bg-gradient-to-r ${category.color}`} />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon name={category.icon as any} size={24} className="text-white" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                      <h4 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {category.description}
                      </p>
                      <Button variant="ghost" className="w-full justify-start px-0 group-hover:text-primary">
                        Перейти
                        <Icon name="ChevronRight" size={16} className="ml-auto" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={48} className="text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2">Ничего не найдено</h3>
              <p className="text-muted-foreground mb-6">
                Попробуйте изменить запрос или выберите из всех категорий
              </p>
              <Button onClick={() => setSearchQuery('')} variant="outline">
                Сбросить поиск
              </Button>
            </div>
          )}
        </section>

        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center">
          <Icon name="Lightbulb" size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-3xl font-heading font-bold mb-4">Не нашли нужную категорию?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Предложите свою тему для новой категории, и мы рассмотрим ваш запрос
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Icon name="MessageSquarePlus" size={20} className="mr-2" />
            Предложить категорию
          </Button>
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
                {categoriesData.slice(0, 4).map(cat => (
                  <li key={cat.id}><Link to="/categories" className="hover:text-primary transition-colors">{cat.name}</Link></li>
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

export default Categories;