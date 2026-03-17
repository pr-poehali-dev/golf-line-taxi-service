import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/b125836d-d46f-43fd-82d7-01bd1d12966c/files/6b2c4fdc-1ea0-4f05-8140-4fa3d3d8dc4e.jpg";

const services = [
  {
    icon: "Building2",
    title: "Корпоративные перевозки",
    desc: "Транспортное обслуживание сотрудников и партнёров вашей компании. Договор, закрывающие документы, единый счёт.",
  },
  {
    icon: "MapPin",
    title: "Межгород",
    desc: "Поездки в любой город региона и страны. Комфортабельные автомобили, фиксированная цена без сюрпризов.",
  },
  {
    icon: "Plane",
    title: "Трансферы в аэропорт",
    desc: "Встреча и проводы в аэропорту. Водитель отслеживает рейс и ждёт при задержке.",
  },
  {
    icon: "Clock",
    title: "Почасовая аренда",
    desc: "Автомобиль с водителем на несколько часов для деловых встреч, переговоров или экскурсий.",
  },
];

const tariffs = [
  {
    name: "Стандарт",
    price: "от 299 ₽",
    features: ["Sedan класса B/C", "До 4 пассажиров", "Кондиционер", "Безналичная оплата"],
    accent: false,
  },
  {
    name: "Комфорт",
    price: "от 499 ₽",
    features: ["Sedan класса E", "До 4 пассажиров", "Климат-контроль", "Зарядка для телефона", "Вода в подарок"],
    accent: true,
  },
  {
    name: "Бизнес",
    price: "от 899 ₽",
    features: ["Представительский класс", "До 4 пассажиров", "Встреча с табличкой", "Тихий салон", "Закрывающие документы"],
    accent: false,
  },
  {
    name: "Минивэн",
    price: "от 699 ₽",
    features: ["Минивэн до 7 мест", "Большой багажник", "Групповые поездки", "Встреча в аэропорту"],
    accent: false,
  },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", from: "", to: "", date: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] font-montserrat text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-[#C9A84C]/20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-cormorant text-2xl font-bold text-[#C9A84C] tracking-widest uppercase">Gold Line</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[["services", "Услуги"], ["tariffs", "Тарифы"], ["order", "Заказать"]].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm font-medium text-gray-300 hover:text-[#C9A84C] transition-colors duration-200 tracking-wider uppercase"
              >
                {label}
              </button>
            ))}
          </div>
          <a
            href="tel:+70000000000"
            className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#1A1A1A] font-semibold text-sm px-4 py-2 transition-colors duration-200"
          >
            <Icon name="Phone" size={14} />
            <span>+7 (000) 000-00-00</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
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
              <span className="block text-[#C9A84C]">Gold&nbsp;Line</span>
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
              <a
                href="tel:+70000000000"
                className="flex items-center justify-center gap-2 border border-white/30 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] px-8 py-4 text-sm tracking-wider uppercase transition-all duration-200"
              >
                <Icon name="Phone" size={16} />
                Позвонить
              </a>
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
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-[#1A1A1A] border border-white/5 hover:border-[#C9A84C]/40 p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-[#C9A84C]/10 flex items-center justify-center mb-4 group-hover:bg-[#C9A84C]/20 transition-colors duration-300">
                  <Icon name={s.icon} fallback="Car" size={20} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-semibold text-white text-base mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFFS */}
      <section id="tariffs" className="py-24 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-xs font-medium tracking-widest uppercase mb-3">Прозрачное ценообразование</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white">Тарифы</h2>
            <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tariffs.map((t) => (
              <div
                key={t.name}
                className={`relative flex flex-col p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  t.accent
                    ? "bg-[#C9A84C]/5 border-[#C9A84C]"
                    : "bg-[#2A2A2A] border-white/5 hover:border-[#C9A84C]/30"
                }`}
              >
                {t.accent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#1A1A1A] text-xs font-bold px-3 py-1 tracking-wider uppercase">
                    Популярный
                  </div>
                )}
                <div className="mb-4">
                  <h3 className={`font-semibold text-lg mb-1 ${t.accent ? "text-[#C9A84C]" : "text-white"}`}>{t.name}</h3>
                  <div className="font-cormorant text-3xl font-bold text-white">{t.price}</div>
                </div>
                <ul className="space-y-2 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <Icon name="Check" size={14} className="text-[#C9A84C] mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollTo("order")}
                  className={`mt-6 w-full py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-200 ${
                    t.accent
                      ? "bg-[#C9A84C] hover:bg-[#E8C96A] text-[#1A1A1A]"
                      : "border border-white/20 hover:border-[#C9A84C] text-white hover:text-[#C9A84C]"
                  }`}
                >
                  Выбрать
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-gray-400 text-sm">
            * Для новых клиентов скидка{" "}
            <span className="text-[#C9A84C] font-semibold">10%</span> на первую поездку
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
                {[
                  { icon: "Phone", text: "+7 (000) 000-00-00", label: "Звонки 24/7" },
                  { icon: "MessageSquare", text: "WhatsApp / Telegram", label: "Написать нам" },
                  { icon: "MapPin", text: "Москва и регионы", label: "Зона работы" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                      <Icon name={item.icon} fallback="Phone" size={18} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{item.text}</div>
                      <div className="text-gray-400 text-xs">{item.label}</div>
                    </div>
                  </div>
                ))}
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
          <div className="flex items-center">
            <span className="font-cormorant text-xl font-bold text-[#C9A84C] tracking-widest uppercase">Gold Line</span>
          </div>
          <p className="text-gray-500 text-xs">© 2026 Gold Line. Такси по городу и межгороду.</p>
          <a href="tel:+70000000000" className="text-[#C9A84C] text-sm font-medium hover:text-[#E8C96A] transition-colors">
            +7 (000) 000-00-00
          </a>
        </div>
      </footer>
    </div>
  );
}