import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  
  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };
  
  const toggleFavorite = (itemId: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(itemId)) {
        newFavorites.delete(itemId);
      } else {
        newFavorites.add(itemId);
      }
      return newFavorites;
    });
  };
  
  const menuItems = [
    {
      id: 1,
      name: "Филадельфия с лососем",
      description: "Нори, рис, лосось, сливочный сыр, огурец",
      price: 590,
      image: "/img/b32dc7f9-1a95-4a44-bad8-98371bec88a5.jpg",
      popular: true
    },
    {
      id: 2,
      name: "Калифорния",
      description: "Нори, рис, краб, авокадо, огурец, икра тобико",
      price: 420,
      image: "/img/651abdd3-0743-4ee5-9636-151ffc24597c.jpg",
      popular: true
    },
    {
      id: 3,
      name: "Сет \"Мастер\"",
      description: "8 видов роллов, 32 штуки",
      price: 1890,
      image: "/img/3e8d65aa-b90d-46ac-9be4-64cc1f393ef3.jpg",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-xl">🍣</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">SUSHI DELIVERY</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Icon name="Phone" size={16} />
              <span>+7 (495) 123-45-67</span>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl font-bold mb-6 leading-tight">Доставка суши<br/>и роллов</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">Свежие ингредиенты • Быстрая доставка • Лучшие цены в городе</p>
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={24} />
              <span>30-45 мин</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={24} />
              <span>Бесплатно от 1000₽</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={24} />
              <span>4.9 из 5</span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="ArrowDown" size={20} className="mr-2" />
            Смотреть меню
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Популярные роллы</h3>
            <p className="text-gray-600 text-lg">Наши самые любимые позиции от гостей ресторана</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                    onClick={() => toggleFavorite(item.id)}
                  >
                    <Icon 
                      name="Heart" 
                      size={16} 
                      className={`transition-colors ${favorites.has(item.id) ? 'text-red-500 fill-current' : 'text-gray-600 hover:text-red-500'}`} 
                    />
                  </Button>
                  {item.popular && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-lg">
                      🔥 Хит продаж
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6 relative">
                  <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">{item.name}</h4>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">{item.price}₽</span>
                    <Button 
                      onClick={addToCart}
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Icon name="Plus" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-orange-500 text-orange-600 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-transparent transition-all duration-300 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Показать все роллы
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Почему выбирают нас</h3>
            <p className="text-gray-600 text-lg">Мы заботимся о каждой детали вашего заказа</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                <Icon name="Truck" size={36} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-gray-900">Быстрая доставка</h4>
              <p className="text-gray-600 leading-relaxed">Доставляем ваш заказ за 30-45 минут по всему городу</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                <Icon name="Fish" size={36} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-gray-900">Свежие продукты</h4>
              <p className="text-gray-600 leading-relaxed">Используем только свежую рыбу и качественные ингредиенты</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                <Icon name="CreditCard" size={36} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-gray-900">Удобная оплата</h4>
              <p className="text-gray-600 leading-relaxed">Принимаем наличные, карты и онлайн-переводы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Отзывы наших гостей</h3>
            <p className="text-gray-600 text-lg">Что говорят о нас клиенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Анна К.", rating: 5, text: "Лучшие роллы в городе! Быстрая доставка и всегда свежие продукты." },
              { name: "Дмитрий П.", rating: 5, text: "Заказываю уже полгода. Качество всегда на высоте, рекомендую!" },
              { name: "Мария С.", rating: 5, text: "Очень вкусно и красиво оформлено. Курьер всегда приезжает вовремя." }
            ].map((review, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <h4 className="font-semibold text-gray-900">{review.name}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Hours Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-orange-500" />
                  <span className="text-lg">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-orange-500" />
                  <span className="text-lg">ул. Пушкина, д. 10, Москва</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-orange-500" />
                  <span className="text-lg">info@sushidelivery.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Время работы</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Понедельник - Четверг</span>
                  <span className="font-semibold">11:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Пятница - Суббота</span>
                  <span className="font-semibold">11:00 - 01:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Воскресенье</span>
                  <span className="font-semibold">12:00 - 22:00</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded">
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="text-green-600 mr-2" />
                  <span className="text-green-800 font-semibold">Сейчас открыто</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xl">🍣</span>
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">SUSHI DELIVERY</h1>
              </div>
              <p className="text-gray-400">Лучшая доставка суши и роллов в городе</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Меню</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Роллы</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Суши</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Сеты</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Напитки</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Следите за нами</h4>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-orange-400">
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-orange-400">
                  <Icon name="Phone" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-orange-400">
                  <Icon name="Mail" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="text-center">
              <p className="text-gray-400">&copy; 2024 SUSHI DELIVERY. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;