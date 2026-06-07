import { useState, type FormEvent } from "react";
import "./App.css";

const stats = [
  { value: "5+", label: "лет опыта" },
  { value: "120+", label: "выполненных проектов" },
  { value: "50+", label: "постоянных клиентов" },
  { value: "24/7", label: "поддержка" },
];

const services = [
  {
    title: "Консультация специалиста",
    text: "Первичный разбор задачи, рекомендации и подбор оптимального решения.",
  },
  {
    title: "Сопровождение проекта",
    text: "Поддержка клиента на всех этапах — от идеи до результата.",
  },
  {
    title: "Анализ и планирование",
    text: "Оценка текущей ситуации, выявление проблем и составление плана действий.",
  },
  {
    title: "Подготовка документов",
    text: "Разработка, проверка и оформление необходимых материалов.",
  },
  {
    title: "Комплексное обслуживание",
    text: "Регулярная поддержка и сопровождение клиентов.",
  },
  {
    title: "Индивидуальное решение",
    text: "Услуга под конкретный запрос клиента и особенности проекта.",
  },
];

const prices = [
  {
    service: "Первичная консультация",
    description: "Разбор задачи и рекомендации",
    price: "от 1 500 ₽",
  },
  {
    service: "Анализ ситуации",
    description: "Подготовка заключения и плана действий",
    price: "от 3 000 ₽",
  },
  {
    service: "Сопровождение проекта",
    description: "Поддержка на всех этапах работы",
    price: "от 10 000 ₽",
  },
  {
    service: "Подготовка документов",
    description: "Оформление и проверка материалов",
    price: "от 2 500 ₽",
  },
  {
    service: "Комплексное обслуживание",
    description: "Регулярная работа с клиентом",
    price: "от 20 000 ₽",
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Заявка отправлена!");
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className="site">
      <header className="header">
        <a href="#" className="logo" onClick={closeMenu}>
          Компас
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Открыть меню"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>

        <nav className={isMenuOpen ? "nav nav-open" : "nav"}>
          <a href="#about" onClick={closeMenu}>
            О компании
          </a>
          <a href="#services" onClick={closeMenu}>
            Услуги
          </a>
          <a href="#prices" onClick={closeMenu}>
            Прайс-лист
          </a>
          <a href="#contacts" onClick={closeMenu}>
            Контакты
          </a>
          <a href="#contacts" className="mobile-menu-cta" onClick={closeMenu}>
            Оставить заявку
          </a>
        </nav>

        <a href="#contacts" className="button header-button">
          Оставить заявку
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="subtitle">Компания «Компас»</p>
            <h1>Надежный ориентир для вашего бизнеса</h1>
            <p className="hero-text">
              Помогаем клиентам находить эффективные решения, экономить время и
              уверенно двигаться к результату.
            </p>

            <div className="hero-buttons">
              <a href="#contacts" className="button">
                Получить консультацию
              </a>
              <a href="#services" className="button-outline">
                Посмотреть услуги
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="compass-icon">🧭</div>
            <h2>Двигаемся в правильном направлении</h2>
            <p>
              Анализируем задачу, предлагаем решение и сопровождаем клиента до
              результата.
            </p>
          </div>
        </section>

        <section className="stats">
          {stats.map((item) => (
            <div className="stat-card" key={item.label}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </section>

        <section id="about" className="section about">
          <div>
            <p className="section-label">О компании</p>
            <h2>Мы помогаем выбрать правильное направление</h2>
            <p>
              Компания «Компас» помогает клиентам находить оптимальные решения в
              сфере услуг, сопровождения и консультаций. Мы ценим прозрачность,
              ответственность и индивидуальный подход к каждому заказчику.
            </p>
          </div>

          <div className="about-card">
            <h3>Наши принципы</h3>
            <ul>
              <li>Индивидуальный подход</li>
              <li>Прозрачные условия</li>
              <li>Соблюдение сроков</li>
              <li>Поддержка на всех этапах</li>
            </ul>
          </div>
        </section>

        <section id="services" className="section">
          <p className="section-label">Услуги</p>
          <h2>Перечень услуг</h2>

          <div className="cards">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <div className="card-icon">✓</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <button type="button">Подробнее</button>
              </article>
            ))}
          </div>
        </section>

        <section id="prices" className="section">
          <p className="section-label">Стоимость</p>
          <h2>Прайс-лист</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Услуга</th>
                  <th>Описание</th>
                  <th>Стоимость</th>
                </tr>
              </thead>

              <tbody>
                {prices.map((item) => (
                  <tr key={item.service}>
                    <td>{item.service}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="price-note">
            Точная стоимость зависит от объема задачи. Оставьте заявку, и мы
            подготовим индивидуальное предложение.
          </p>
        </section>

        <section className="section advantages">
          <p className="section-label">Преимущества</p>
          <h2>Почему выбирают нас</h2>

          <div className="advantages-grid">
            <div>Быстро отвечаем на заявки</div>
            <div>Работаем по понятному плану</div>
            <div>Объясняем сложное простыми словами</div>
            <div>Предлагаем решения под бюджет клиента</div>
          </div>
        </section>

        <section id="contacts" className="section contact-section">
          <div>
            <p className="section-label">Контакты</p>
            <h2>Оставить заявку</h2>
            <p>
              Заполните форму, и мы свяжемся с вами в ближайшее время для
              уточнения деталей.
            </p>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Ваше имя" required />

            <input
              type="tel"
              placeholder="Телефон"
              required
              inputMode="tel"
              pattern="^[0-9+\-()\s]{7,20}$"
              title="Введите номер телефона. Можно использовать только цифры, +, -, скобки и пробелы."
              onInput={(event) => {
                event.currentTarget.value = event.currentTarget.value.replace(
                  /[^0-9+\-()\s]/g,
                  ""
                );
              }}
            />

            <input
              type="email"
              placeholder="Email"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Введите корректный email, например: name@mail.ru"
              onInput={(event) => {
                event.currentTarget.value = event.currentTarget.value.replace(
                  /[^a-zA-Z0-9@._-]/g,
                  ""
                );
              }}
            />

            <textarea placeholder="Комментарий" />

            <button type="submit">Отправить заявку</button>
          </form>

        </section>
      </main>

      <footer className="footer">
        <div>
          <h2>Компас</h2>
          <p>Надежный ориентир для вашего бизнеса</p>
        </div>

        <p>© 2026 Компас. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;