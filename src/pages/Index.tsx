import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: 'camping' | 'garden';
  description: string;
  features: string[];
  specs: Record<string, string>;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Семейная палатка "Лес"',
    price: '12 900 ₽',
    image: '/img/b3048026-b82d-4ca9-9b21-92aeacd606df.jpg',
    category: 'camping',
    description: 'Просторная 4-местная палатка для семейного отдыха',
    features: ['Водонепроницаемая', 'Быстрая установка', 'Два входа', 'Тамбур'],
    specs: {
      'Вместимость': '4 человека',
      'Материал': 'Полиэстер 190T',
      'Водостойкость': '3000 мм',
      'Вес': '4.2 кг',
      'Размеры': '240×210×130 см'
    },
    rating: 4.8
  },
  {
    id: 2,
    name: 'Мангал "Природа"',
    price: '8 500 ₽',
    image: '/img/a5d11048-4a5e-45be-b99b-72dd9e070bed.jpg',
    category: 'garden',
    description: 'Складной мангал из нержавеющей стали',
    features: ['Нержавеющая сталь', 'Складная конструкция', 'Регулируемая высота', 'Поддон'],
    specs: {
      'Материал': 'Нержавеющая сталь',
      'Размеры': '60×40×80 см',
      'Вес': '8.5 кг',
      'Толщина стали': '2 мм',
      'Решетка': 'В комплекте'
    },
    rating: 4.6
  },
  {
    id: 3,
    name: 'Туристическая палатка "Компакт"',
    price: '6 900 ₽',
    image: '/img/b3048026-b82d-4ca9-9b21-92aeacd606df.jpg',
    category: 'camping',
    description: 'Легкая 2-местная палатка для пеших походов',
    features: ['Ультралегкая', 'Компактная', 'Ветроустойчивая', 'Москитная сетка'],
    specs: {
      'Вместимость': '2 человека',
      'Материал': 'Нейлон 20D',
      'Водостойкость': '4000 мм',
      'Вес': '1.8 кг',
      'Размеры': '210×140×110 см'
    },
    rating: 4.9
  },
  {
    id: 4,
    name: 'Садовый мангал "Премиум"',
    price: '15 900 ₽',
    image: '/img/a5d11048-4a5e-45be-b99b-72dd9e070bed.jpg',
    category: 'garden',
    description: 'Профессиональный мангал с дымоходом',
    features: ['Дымоход', 'Термометр', 'Боковые полки', 'Колеса для транспортировки'],
    specs: {
      'Материал': 'Чугун + сталь',
      'Размеры': '120×60×150 см',
      'Вес': '45 кг',
      'Толщина стали': '3 мм',
      'Дополнительно': 'Термометр, крючки'
    },
    rating: 4.7
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'camping' | 'garden'>('all');
  const [compareList, setCompareList] = useState<number[]>([]);

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const toggleCompare = (productId: number) => {
    setCompareList(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const compareProducts = products.filter(product => compareList.includes(product.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-50 to-nature-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-nature-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Trees" className="h-8 w-8 text-nature-700" />
              <h1 className="text-2xl font-bold text-nature-800">OUTDOOR STORE</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#catalog" className="text-nature-700 hover:text-nature-900 font-medium">Каталог</a>
              <a href="#camping" className="text-nature-700 hover:text-nature-900 font-medium">Кемпинг</a>
              <a href="#garden" className="text-nature-700 hover:text-nature-900 font-medium">Сад</a>
              <a href="#delivery" className="text-nature-700 hover:text-nature-900 font-medium">Доставка</a>
              <a href="#contacts" className="text-nature-700 hover:text-nature-900 font-medium">Контакты</a>
            </div>
            <Button variant="outline" className="border-nature-300 text-nature-700 hover:bg-nature-50">
              <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
              Корзина
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-nature-600/10 to-nature-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold text-nature-800 mb-6">
            Товары для кемпинга и садового отдыха
          </h2>
          <p className="text-xl text-nature-600 mb-8 max-w-2xl mx-auto">
            Откройте мир природы с нашим качественным оборудованием для активного отдыха
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-nature-700 hover:bg-nature-800 text-white px-8">
              <Icon name="Tent" className="h-5 w-5 mr-2" />
              Посмотреть каталог
            </Button>
            <Button variant="outline" size="lg" className="border-nature-300 text-nature-700 hover:bg-nature-50">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-nature-800 mb-8 text-center">Наш каталог</h3>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 bg-white rounded-lg p-1 shadow-sm border border-nature-200">
              <Button 
                variant={selectedCategory === 'all' ? 'default' : 'ghost'}
                onClick={() => setSelectedCategory('all')}
                className={selectedCategory === 'all' ? 'bg-nature-700 text-white' : 'text-nature-700'}
              >
                Все товары
              </Button>
              <Button 
                variant={selectedCategory === 'camping' ? 'default' : 'ghost'}
                onClick={() => setSelectedCategory('camping')}
                className={selectedCategory === 'camping' ? 'bg-nature-700 text-white' : 'text-nature-700'}
              >
                <Icon name="Tent" className="h-4 w-4 mr-2" />
                Кемпинг
              </Button>
              <Button 
                variant={selectedCategory === 'garden' ? 'default' : 'ghost'}
                onClick={() => setSelectedCategory('garden')}
                className={selectedCategory === 'garden' ? 'bg-nature-700 text-white' : 'text-nature-700'}
              >
                <Icon name="Flame" className="h-4 w-4 mr-2" />
                Сад
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow bg-white border-nature-200">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge 
                    className={`absolute top-2 left-2 ${
                      product.category === 'camping' 
                        ? 'bg-nature-600 text-white' 
                        : 'bg-orange-600 text-white'
                    }`}
                  >
                    {product.category === 'camping' ? 'Кемпинг' : 'Сад'}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-nature-800">{product.name}</CardTitle>
                  <CardDescription className="text-nature-600">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                    <span className="text-sm text-nature-600 ml-2">{product.rating}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-nature-300 text-nature-700">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-nature-800">{product.price}</span>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => toggleCompare(product.id)}
                        className={`border-nature-300 ${
                          compareList.includes(product.id) 
                            ? 'bg-nature-100 text-nature-800' 
                            : 'text-nature-700 hover:bg-nature-50'
                        }`}
                      >
                        <Icon name="BarChart3" className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-nature-700 hover:bg-nature-800 text-white">
                        <Icon name="ShoppingCart" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Section */}
          {compareList.length > 0 && (
            <Card className="bg-white border-nature-200">
              <CardHeader>
                <CardTitle className="text-nature-800 flex items-center">
                  <Icon name="BarChart3" className="h-5 w-5 mr-2" />
                  Сравнение товаров ({compareList.length})
                </CardTitle>
                <CardDescription className="text-nature-600">
                  Сравните характеристики выбранных товаров
                </CardDescription>
              </CardHeader>
              <CardContent>
                {compareProducts.length > 1 ? (
                  <Tabs defaultValue="specs" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="specs" className="text-nature-700">Характеристики</TabsTrigger>
                      <TabsTrigger value="features" className="text-nature-700">Особенности</TabsTrigger>
                    </TabsList>
                    <TabsContent value="specs">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-nature-800">Характеристика</TableHead>
                            {compareProducts.map(product => (
                              <TableHead key={product.id} className="text-nature-800 text-center">
                                {product.name}
                              </TableHead>
                            ))}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {Object.keys(compareProducts[0].specs).map(spec => (
                            <TableRow key={spec}>
                              <TableCell className="font-medium text-nature-700">{spec}</TableCell>
                              {compareProducts.map(product => (
                                <TableCell key={product.id} className="text-center text-nature-600">
                                  {product.specs[spec] || '—'}
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                          <TableRow>
                            <TableCell className="font-medium text-nature-700">Цена</TableCell>
                            {compareProducts.map(product => (
                              <TableCell key={product.id} className="text-center font-bold text-nature-800">
                                {product.price}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TabsContent>
                    <TabsContent value="features">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {compareProducts.map(product => (
                          <Card key={product.id} className="border-nature-200">
                            <CardHeader>
                              <CardTitle className="text-sm text-nature-800">{product.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-1">
                                {product.features.map((feature, index) => (
                                  <li key={index} className="flex items-center text-sm text-nature-600">
                                    <Icon name="Check" className="h-3 w-3 text-green-600 mr-2" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                ) : (
                  <p className="text-center text-nature-600 py-8">
                    Добавьте еще товары для сравнения
                  </p>
                )}
                <div className="flex justify-center mt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setCompareList([])}
                    className="border-nature-300 text-nature-700 hover:bg-nature-50"
                  >
                    Очистить сравнение
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-nature-200">
              <CardHeader>
                <Icon name="Truck" className="h-12 w-12 text-nature-600 mx-auto mb-4" />
                <CardTitle className="text-nature-800">Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-nature-600">
                  Доставляем по всей России в течение 1-3 дней
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-nature-200">
              <CardHeader>
                <Icon name="Shield" className="h-12 w-12 text-nature-600 mx-auto mb-4" />
                <CardTitle className="text-nature-800">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-nature-600">
                  Официальная гарантия на все товары от 1 до 3 лет
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-nature-200">
              <CardHeader>
                <Icon name="Headphones" className="h-12 w-12 text-nature-600 mx-auto mb-4" />
                <CardTitle className="text-nature-800">Поддержка 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-nature-600">
                  Консультации по выбору и эксплуатации оборудования
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nature-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Trees" className="h-6 w-6" />
                <span className="text-xl font-bold">OUTDOOR STORE</span>
              </div>
              <p className="text-nature-200">
                Лучшее оборудование для активного отдыха на природе
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-nature-200">
                <li><a href="#" className="hover:text-white">Палатки</a></li>
                <li><a href="#" className="hover:text-white">Мангалы</a></li>
                <li><a href="#" className="hover:text-white">Инвентарь</a></li>
                <li><a href="#" className="hover:text-white">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-nature-200">
                <li><a href="#" className="hover:text-white">О компании</a></li>
                <li><a href="#" className="hover:text-white">Доставка</a></li>
                <li><a href="#" className="hover:text-white">Оплата</a></li>
                <li><a href="#" className="hover:text-white">Возврат</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-nature-200">
                <li className="flex items-center">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="h-4 w-4 mr-2" />
                  info@outdoor-store.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" className="h-4 w-4 mr-2" />
                  Москва, ул. Природная, 15
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-nature-700 mt-8 pt-8 text-center text-nature-200">
            <p>&copy; 2024 OUTDOOR STORE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}