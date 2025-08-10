import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const events = [
    {
      title: "Вечеринка новичков",
      date: "Суббота, 15 февраля",
      time: "20:00 - 02:00",
      price: "3,000 ₽",
      description: "Специальный вечер для тех, кто только начинает знакомиться с культурой свинга"
    },
    {
      title: "Элитный прием",
      date: "Пятница, 21 февраля",
      time: "21:00 - 03:00", 
      price: "5,000 ₽",
      description: "Эксклюзивное мероприятие для постоянных участников клуба"
    },
    {
      title: "Тематическая вечеринка",
      date: "Суббота, 28 февраля",
      time: "19:30 - 01:00",
      price: "4,000 ₽",
      description: "Особенная атмосфера с дресс-кодом и специальной программой"
    }
  ];

  const membershipPlans = [
    {
      name: "Базовое",
      price: "15,000 ₽/месяц",
      features: ["Доступ к основным мероприятиям", "Приоритетная запись", "Скидка 10% в баре"]
    },
    {
      name: "Премиум",
      price: "25,000 ₽/месяц", 
      features: ["Все базовые привилегии", "Доступ к VIP-зонам", "Персональный консультант", "Скидка 20% на все услуги"],
      featured: true
    },
    {
      name: "Элитное",
      price: "40,000 ₽/месяц",
      features: ["Все премиум привилегии", "Приватные мероприятия", "Индивидуальный подход", "Полный доступ к клубу"]
    }
  ];

  const rules = [
    {
      icon: "Shield",
      title: "Конфиденциальность",
      description: "Полная анонимность и защита личных данных всех участников"
    },
    {
      icon: "Users",
      title: "Взаимное уважение",
      description: "Обязательное согласие всех сторон на любые взаимодействия"
    },
    {
      icon: "Heart",
      title: "Безопасность",
      description: "Регулярные медицинские проверки и строгие стандарты гигиены"
    },
    {
      icon: "UserCheck",
      title: "Дресс-код",
      description: "Элегантный внешний вид и соблюдение установленных норм одежды"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Intimate Club</h1>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">О клубе</a>
              <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors">Мероприятия</a>
              <a href="#membership" className="text-muted-foreground hover:text-foreground transition-colors">Членство</a>
              <a href="#rules" className="text-muted-foreground hover:text-foreground transition-colors">Правила</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Присоединиться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Добро пожаловать в<br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Intimate Club
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Эксклюзивное пространство для взрослых, где царит атмосфера доверия, уважения и взаимопонимания. 
              Откройте новые грани близости в безопасной и комфортной обстановке.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-lg">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на посещение
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-3 text-lg">
                <Icon name="CreditCard" className="mr-2" size={20} />
                Оплатить участие
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-foreground mb-8">О нашем клубе</h3>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Intimate Club — это премиальное пространство для людей, которые ценят качество, конфиденциальность и 
              новые впечатления. Мы создали уникальную атмосферу, где каждый может чувствовать себя комфортно и безопасно.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lock" className="text-primary" size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2">Приватность</h4>
                <p className="text-muted-foreground">Полная конфиденциальность и защита вашей частной жизни</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" className="text-primary" size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2">Премиум сервис</h4>
                <p className="text-muted-foreground">Высочайший уровень обслуживания и внимания к деталям</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2">Сообщество</h4>
                <p className="text-muted-foreground">Открытые и единомышленники в дружелюбной атмосфере</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center text-foreground mb-12">Предстоящие мероприятия</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <Card key={index} className="border-border/40 hover:shadow-lg transition-all duration-300 rounded-3xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="rounded-full px-3 py-1">
                        {event.price}
                      </Badge>
                      <Icon name="Calendar" className="text-muted-foreground" size={20} />
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {event.date} • {event.time}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                    <Button className="w-full rounded-full bg-primary hover:bg-primary/90">
                      Забронировать место
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center text-foreground mb-8">Галерея наших вечеринок</h3>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Погрузитесь в атмосферу наших эксклюзивных мероприятий — элегантность, стиль и незабываемые впечатления
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-3xl aspect-square">
                <img 
                  src="/img/0b651922-5566-416a-a4a8-759682ef6cc0.jpg" 
                  alt="Атмосфера элегантной вечеринки"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-white text-xl font-semibold mb-2">Элегантная атмосфера</h4>
                    <p className="text-white/80 text-sm">Изысканная обстановка наших мероприятий</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-3xl aspect-square">
                <img 
                  src="/img/5dbb790b-0d83-437c-b7bf-cd228d8bcbcb.jpg" 
                  alt="Танцевальная зона клуба"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-white text-xl font-semibold mb-2">Танцевальные вечера</h4>
                    <p className="text-white/80 text-sm">Романтическая музыка и плавные движения</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl aspect-square">
                <img 
                  src="/img/8f0082ac-16ce-42ab-ac1d-4fcb75a5ed56.jpg" 
                  alt="Lounge зона клуба"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-white text-xl font-semibold mb-2">Lounge зоны</h4>
                    <p className="text-white/80 text-sm">Комфортные пространства для общения</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-3">
                <Icon name="Images" className="mr-2" size={20} />
                Смотреть все фото
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center text-foreground mb-12">Варианты членства</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {membershipPlans.map((plan, index) => (
                <Card key={index} className={`border-border/40 rounded-3xl overflow-hidden transition-all duration-300 ${
                  plan.featured ? 'ring-2 ring-primary border-primary/50 scale-105' : 'hover:shadow-lg'
                }`}>
                  <CardHeader className="pb-4 relative">
                    {plan.featured && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full">
                        Популярный
                      </Badge>
                    )}
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-primary">
                      {plan.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Icon name="Check" className="text-primary mr-2 flex-shrink-0" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full rounded-full ${
                      plan.featured 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                    }`}>
                      Выбрать план
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-center text-foreground mb-12">Правила клуба</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl bg-card/50 border border-border/30">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={rule.icon} className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{rule.title}</h4>
                    <p className="text-muted-foreground">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-foreground mb-8">Связаться с нами</h3>
            <p className="text-lg text-muted-foreground mb-12">
              Готовы присоединиться к нашему сообществу? Свяжитесь с нами для получения дополнительной информации.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2">Телефон</h4>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2">Email</h4>
                <p className="text-muted-foreground">info@intimate-club.ru</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2">Адрес</h4>
                <p className="text-muted-foreground">Москва, ул. Конфиденциальная, 1</p>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-lg">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/40">
        <div className="container mx-auto">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-primary mb-4">Intimate Club</h4>
            <p className="text-muted-foreground mb-6">
              Премиальное пространство для взрослых • Конфиденциальность гарантирована
            </p>
            <Separator className="my-6" />
            <p className="text-sm text-muted-foreground">
              © 2025 Intimate Club. Все права защищены. Только для лиц старше 18 лет.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}