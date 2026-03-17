import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/b125836d-d46f-43fd-82d7-01bd1d12966c/files/6b2c4fdc-1ea0-4f05-8140-4fa3d3d8dc4e.jpg";

const serviceCategories = [
  {
    icon: "Car",
    title: "Эконом",
    desc: "Доступные поездки по городу. Чистые автомобили, вежливые водители.",
    cars: ["Lada Vesta", "Hyundai Solaris", "Kia Rio"],
    price: "от 30 ₽/км",
  },
  {
    icon: "Star",
    title: "Комфорт",
    desc: "Просторные седаны класса E. Климат-контроль и тихий салон.",
    cars: ["Toyota Camry", "Skoda Octavia", "Volkswagen Passat"],
    price: "от 50 ₽/км",
  },
  {
    icon: "Users",
    title: "Минивэн",
    desc: "До 7 пассажиров. Просторный багажник для групповых поездок.",
    cars: ["Kia Carnival", "VW Multivan", "Ford Transit"],
    price: "от 60 ₽/км",
  },
  {
    icon: "Crown",
    title: "Минивэн Бизнес",
    desc: "Представительский минивэн для корпоративных клиентов. Встреча с табличкой.",
    cars: ["Mercedes V-Class", "Toyota Alphard", "Chrysler Voyager"],
    price: "от 90 ₽/км",
  },
];

const tariffs = [
  {
    name: "Эконом",
    price: "от 30 ₽/км",
    minPrice: "Минимальный заказ 300 ₽",
    features: ["Sedan класса B/C", "До 4 пассажиров", "Кондиционер", "Безналичная оплата"],
    accent: false,
    color: "#6B7280",
  },
  {
    name: "Комфорт",
    price: "от 50 ₽/км",
    minPrice: "Минимальный заказ 500 ₽",
    features: ["Sedan класса E", "До 4 пассажиров", "Климат-контроль", "Зарядка для телефона", "Вода в подарок"],
    accent: true,
    color: "#C9A84C",
  },
  {
    name: "Минивэн",
    price: "от 60 ₽/км",
    minPrice: "Минимальный заказ 600 ₽",
    features: ["Минивэн до 7 мест", "Большой багажник", "Групповые поездки", "Кондиционер"],
    accent: false,
    color: "#6B7280",
  },
  {
    name: "Минивэн Бизнес",
    price: "от 90 ₽/км",
    minPrice: "Минимальный заказ 900 ₽",
    features: ["Представительский минивэн", "До 7 пассажиров", "Встреча с табличкой", "Тихий салон", "Закрывающие документы"],
    accent: false,
    color: "#6B7280",
  },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", from: "", to: "", date: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openService, setOpenService] = useState<number | null>(null);
  const [showTariffs, setShowTariffs] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] font-montserrat text-white">

      {/* TARIFFS MODAL */}
      {showTariffs && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowTariffs(false)}
        >
          <div
            className="bg-[#1A1A1A] border border-[#C9A84C]/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTariffs(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="X" size={22} />
            </button>
            <div className="mb-8">
              <p className="text-[#C9A84C] text-xs font-medium tracking-widest uppercase mb-2">Прозрачное ценообразование</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-white">Тарифы Gold Line</h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mt-3" />
              <p className="text-gray-400 text-sm mt-4">
                Стоимость рассчитывается по фактическому километражу. <span className="text-[#C9A84C] font-semibold">от 30 ₽ за 1 км</span> — в зависимости от класса автомобиля.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {tariffs.map((t) => (
                <div
                  key={t.name}
                  className={`relative flex flex-col p-6 border transition-all duration-300 ${
                    t.accent ? "bg-[#C9A84C]/5 border-[#C9A84C]" : "bg-[#2A2A2A] border-white/10"
                  }`}
                >
                  {t.accent && (
                    <div className="absolute -top-3 left-6 bg-[#C9A84C] text-[#1A1A1A] text-xs font-bold px-3 py-1 tracking-wider uppercase">
                      Популярный
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className={`font-semibold text-lg ${t.accent ? "text-[#C9A84C]" : "text-white"}`}>{t.name}</h3>
                      <p className="text-gray-500 text-xs mt-0.5">{t.minPrice}</p>
                    </div>
                    <div className="font-cormorant text-2xl font-bold text-white text-right">{t.price}</div>
                  </div>
                  <ul className="space-y-2">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                        <Icon name="Check" size={14} className="text-[#C9A84C] mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => { setShowTariffs(false); scrollTo("order"); }}
                    className={`mt-5 w-full py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                      t.accent
                        ? "bg-[#C9A84C] hover:bg-[#E8C96A] text-[#1A1A1A]"
                        : "border border-white/20 hover:border-[#C9A84C] text-white hover:text-[#C9A84C]"
                    }`}
                  >
                    Заказать
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 border border-[#C9A84C]/20 bg-[#C9A84C]/5 text-center">
              <span className="text-[#C9A84C] font-semibold text-sm">Скидка 10%</span>
              <span className="text-gray-400 text-sm"> — для новых клиентов на первую поездку</span>
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-[#C9A84C]/20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="font-cormorant text-2xl font-bold text-[#C9A84C] tracking-widest uppercase">Gold</span>
            <span className="font-cormorant text-2xl font-light text-white tracking-widest uppercase ml-1">Line</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("services")}
              className="text-sm font-medium text-gray-300 hover:text-[#C9A84C] transition-colors duration-200 tracking-wider uppercase"
            >
              Услуги
            </button>
            <button
              onClick={() => setShowTariffs(true)}
              className="text-sm font-medium text-gray-300 hover:text-[#C9A84C] transition-colors duration-200 tracking-wider uppercase"
            >
              Тарифы
            </button>
            <button
              onClick={() => scrollTo("order")}
              className="text-sm font-medium text-gray-300 hover:text-[#C9A84C] transition-colors duration-200 tracking-wider uppercase"
            >
              Заказать
            </button>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <a
              href="tel:+79895489189"
              className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#1A1A1A] font-semibold text-sm px-4 py-1.5 transition-colors duration-200"
            >
              <Icon name="Phone" size={13} />
              <span>+7 (989) 548-91-89</span>
            </a>
            <a
              href="tel:+79094283646"
              className="flex items-center gap-2 bg-[#C9A84C]/80 hover:bg-[#C9A84C] text-[#1A1A1A] font-semibold text-sm px-4 py-1.5 transition-colors duration-200"
            >
              <Icon name="Phone" size={13} />
              <span>+7 (909) 428-36-46</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-[#1A1A1A]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-[#C9A84C]/40 px-4 py-1.5 mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="text-[#C9A84C] text-xs font-medium tracking-widest uppercase">Скидка 10% новым клиентам</span>
            </div>

            <h1 className="font-cormorant text-5xl md:text-7xl font-bold leading-tight mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
              Такси
              <span className="block text-[#C9A84C]">Gold Line</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-lg animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
              Быстрые и надёжные перевозки по городу и межгороду. Профессиональные водители, комфортабельные автомобили.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.7s" }}>
              <button
                onClick={() => scrollTo("order")}
                className="bg-[#C9A84C] hover:bg-[#E8C96A] text-[#1A1A1A] font-semibold px-8 py-4 text-sm tracking-wider uppercase transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A84C]/20"
              >
                Заказать такси
              </button>
              <button
                onClick={() => setShowTariffs(true)}
                className="flex items-center justify-center gap-2 border border-white/30 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] px-8 py-4 text-sm tracking-wider uppercase transition-all duration-200"
              >
                <Icon name="ListChecks" size={16} />
                Тарифы
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
              {[["5+", "лет на рынке"], ["24/7", "работаем"], ["10%", "скидка новым"]].map(([val, label]) => (
                <div key={label} className="border-l border-[#C9A84C]/30 pl-4">
                  <div className="font-cormorant text-3xl font-bold text-[#C9A84C]">{val}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-wide mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-[#C9A84C]/60" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-[#2A2A2A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-xs font-medium tracking-widest uppercase mb-3">Что мы предлагаем</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white">Наши услуги</h2>
            <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((s, idx) => (
              <div key={s.title} className="flex flex-col">
                <button
                  onClick={() => setOpenService(openService === idx ? null : idx)}
                  className={`group flex flex-col text-left bg-[#1A1A1A] border p-6 transition-all duration-300 hover:-translate-y-1 ${
                    openService === idx ? "border-[#C9A84C]/60" : "border-white/5 hover:border-[#C9A84C]/40"
                  }`}
                >
                  <div className={`w-10 h-10 flex items-center justify-center mb-4 transition-colors duration-300 ${
                    openService === idx ? "bg-[#C9A84C]/25" : "bg-[#C9A84C]/10 group-hover:bg-[#C9A84C]/20"
                  }`}>
                    <Icon name={s.icon} fallback="Car" size={20} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="font-semibold text-white text-base mb-1">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{s.desc}</p>
                  <span className="text-[#C9A84C] text-xs font-semibold">{s.price}</span>
                  <div className="flex items-center gap-1 mt-3 text-gray-500 text-xs">
                    <span>Автомобили</span>
                    <Icon name={openService === idx ? "ChevronUp" : "ChevronDown"} size={14} className="text-[#C9A84C]" />
                  </div>
                </button>

                {/* Dropdown */}
                {openService === idx && (
                  <div className="bg-[#111] border border-[#C9A84C]/30 border-t-0 p-4 animate-fade-in">
                    <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3 font-medium">Доступные автомобили</p>
                    <ul className="space-y-2">
                      {s.cars.map((car) => (
                        <li key={car} className="flex items-center gap-2 text-sm text-gray-300">
                          <Icon name="ChevronRight" size={13} className="text-[#C9A84C] shrink-0" />
                          {car}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => scrollTo("order")}
                      className="mt-4 w-full py-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#1A1A1A] text-xs font-semibold tracking-wider uppercase transition-colors duration-200"
                    >
                      Заказать
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFFS SECTION (scroll target) */}
      <section id="tariffs" className="py-24 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#C9A84C] text-xs font-medium tracking-widest uppercase mb-3">Прозрачное ценообразование</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">Тарифы</h2>
          <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            Стоимость поездки рассчитывается по счётчику.
            Базовая ставка — <span className="text-[#C9A84C] font-semibold">от 30 ₽ за 1 км</span>.
            Итоговая цена зависит от выбранного класса автомобиля.
          </p>
          <button
            onClick={() => setShowTariffs(true)}
            className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#1A1A1A] font-semibold px-8 py-4 text-sm tracking-wider uppercase transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A84C]/20"
          >
            <Icon name="ListChecks" size={16} />
            Смотреть все тарифы
          </button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[["Эконом", "от 30 ₽/км"], ["Комфорт", "от 50 ₽/км"], ["Минивэн", "от 60 ₽/км"], ["Минивэн Бизнес", "от 90 ₽/км"]].map(([name, price]) => (
              <div key={name} className="bg-[#2A2A2A] border border-white/5 p-4 text-center">
                <div className="text-white font-medium text-sm mb-1">{name}</div>
                <div className="font-cormorant text-xl font-bold text-[#C9A84C]">{price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER */}
      <section id="order" className="py-24 bg-[#2A2A2A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#C9A84C] text-xs font-medium tracking-widest uppercase mb-3">Быстрый заказ</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-6">Заказать такси</h2>
              <div className="w-16 h-0.5 bg-[#C9A84C] mb-8" />
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Оставьте заявку — мы перезвоним в течение 2 минут и подберём подходящий автомобиль.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                    <Icon name="Phone" size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <a href="tel:+79895489189" className="text-white font-medium text-sm hover:text-[#C9A84C] transition-colors">
                      +7 (989) 548-91-89
                    </a>
                    <div className="text-gray-400 text-xs">Звонки 24/7</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                    <Icon name="Phone" size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <a href="tel:+79094283646" className="text-white font-medium text-sm hover:text-[#C9A84C] transition-colors">
                      +7 (909) 428-36-46
                    </a>
                    <div className="text-gray-400 text-xs">Звонки 24/7</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                    <Icon name="Send" size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <a
                      href="https://t.me/perevozki24RF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium text-sm hover:text-[#C9A84C] transition-colors"
                    >
                      @perevozki24RF
                    </a>
                    <div className="text-gray-400 text-xs">Telegram</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                    <Icon name="MapPin" size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Город и межгород</div>
                    <div className="text-gray-400 text-xs">Зона работы</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="font-cormorant text-2xl font-bold text-white mb-2">Заявка принята!</h3>
                  <p className="text-gray-400 text-sm">Мы перезвоним вам в течение 2 минут</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-semibold text-white text-lg mb-6">Оставить заявку</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">Ваше имя</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Иван Иванов"
                        className="w-full bg-[#2A2A2A] border border-white/10 focus:border-[#C9A84C]/60 text-white placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">Телефон</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+7 (000) 000-00-00"
                        className="w-full bg-[#2A2A2A] border border-white/10 focus:border-[#C9A84C]/60 text-white placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors duration-200"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">Откуда</label>
                    <input
                      type="text"
                      value={form.from}
                      onChange={(e) => setForm({ ...form, from: e.target.value })}
                      placeholder="Адрес подачи"
                      className="w-full bg-[#2A2A2A] border border-white/10 focus:border-[#C9A84C]/60 text-white placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">Куда</label>
                    <input
                      type="text"
                      value={form.to}
                      onChange={(e) => setForm({ ...form, to: e.target.value })}
                      placeholder="Адрес назначения"
                      className="w-full bg-[#2A2A2A] border border-white/10 focus:border-[#C9A84C]/60 text-white placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">Дата и время</label>
                    <input
                      type="datetime-local"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-[#2A2A2A] border border-white/10 focus:border-[#C9A84C]/60 text-white px-4 py-3 text-sm outline-none transition-colors duration-200 [color-scheme:dark]"
                    />
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider mb-1.5 block">Комментарий</label>
                    <textarea
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      placeholder="Пожелания к поездке, количество мест..."
                      rows={3}
                      className="w-full bg-[#2A2A2A] border border-white/10 focus:border-[#C9A84C]/60 text-white placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C9A84C] hover:bg-[#E8C96A] text-[#1A1A1A] font-semibold py-4 text-sm tracking-wider uppercase transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A84C]/20 mt-2"
                  >
                    Отправить заявку
                  </button>

                  <p className="text-gray-500 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1A1A] border-t border-white/5 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span className="font-cormorant text-xl font-bold text-[#C9A84C] tracking-widest uppercase">Gold</span>
            <span className="font-cormorant text-xl font-light text-white tracking-widest uppercase ml-1">Line</span>
          </div>
          <p className="text-gray-500 text-xs">© 2026 Gold Line. Такси по городу и межгороду.</p>
          <div className="flex flex-col items-end gap-1">
            <a href="tel:+79895489189" className="text-[#C9A84C] text-sm font-medium hover:text-[#E8C96A] transition-colors">
              +7 (989) 548-91-89
            </a>
            <a href="tel:+79094283646" className="text-[#C9A84C] text-sm font-medium hover:text-[#E8C96A] transition-colors">
              +7 (909) 428-36-46
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}