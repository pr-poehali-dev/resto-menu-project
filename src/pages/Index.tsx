import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🍣</span>
            <h1 className="text-2xl font-bold text-gray-900">SUSHI DELIVERY</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Icon name="Phone" size={16} />
              <span>+7 (495) 123-45-67</span>
            </div>
            <Button className="bg-sushi-red hover:bg-red-600 text-white">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sushi-red to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Доставка суши и роллов</h2>
          <p className="text-xl mb-8 text-red-100">Свежие ингредиенты • Быстрая доставка • Лучшие цены в городе</p>
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
          <Button size="lg" className="bg-white text-sushi-red hover:bg-gray-100 text-lg px-8 py-3">
            <Icon name="ArrowDown" size={20} className="mr-2" />
            Смотреть меню
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-sushi-gray">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Популярные роллы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  {item.popular && (
                    <Badge className="absolute top-3 left-3 bg-sushi-red text-white">
                      Хит продаж
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">{item.name}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-sushi-red">{item.price}₽</span>
                    <Button className="bg-sushi-red hover:bg-red-600 text-white">
                      <Icon name="Plus" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-sushi-red text-sushi-red hover:bg-sushi-red hover:text-white">
              Показать все роллы
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Почему выбирают нас</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sushi-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Быстрая доставка</h4>
              <p className="text-gray-600">Доставляем ваш заказ за 30-45 минут по всему городу</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sushi-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Fish" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Свежие продукты</h4>
              <p className="text-gray-600">Используем только свежую рыбу и качественные ингредиенты</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sushi-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Удобная оплата</h4>
              <p className="text-gray-600">Принимаем наличные, карты и онлайн-переводы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sushi-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>Работаем: 10:00 - 23:00</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Меню</h5>
              <div className="space-y-2 text-gray-300">
                <p>Роллы и суши</p>
                <p>Горячие роллы</p>
                <p>Сеты</p>
                <p>Напитки</p>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Социальные сети</h5>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-gray-300 hover:text-white cursor-pointer" />
                <Icon name="Phone" size={24} className="text-gray-300 hover:text-white cursor-pointer" />
                <Icon name="MessageCircle" size={24} className="text-gray-300 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sushi Delivery. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;