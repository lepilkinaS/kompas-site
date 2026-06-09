import { useEffect, useState, type FormEvent } from "react";
import "./App.css";
import logo from "./assets/logo-kompas.jpg";

const stats = [
  { value: "2010", label: "год основания" },
  { value: "14+", label: "лет опыта" },
  { value: "24/7", label: "поддержка клиентов" },
  { value: "100%", label: "комплексный подход" },
];

const services = [
  {
    title: "ИТ-аудит инфраструктуры",
    text: "Оценка текущего состояния серверов, рабочих мест, сетей, систем хранения данных и выявление проблемных зон.",
  },
  {
    title: "Проектирование ИТ-инфраструктуры",
    text: "Разработка архитектуры ИТ-среды с учетом задач бизнеса, масштаба компании и перспектив развития.",
  },
  {
    title: "Внедрение ИТ-решений",
    text: "Настройка серверных, сетевых, программных решений, систем виртуализации и сервисов пользователей.",
  },
  {
    title: "Модернизация инфраструктуры",
    text: "Обновление устаревшего оборудования, повышение производительности, отказоустойчивости и безопасности систем.",
  },
  {
    title: "Техническая поддержка",
    text: "Сопровождение заказчиков, оперативное решение технических вопросов и поддержание стабильной работы сервисов.",
  },
  {
    title: "Информационная безопасность",
    text: "Подбор и внедрение решений для защиты ИТ-среды, резервного копирования и снижения технологических рисков.",
  },
];

const prices = [
  {
    service: "Первичная консультация",
    description: "Разбор задачи, определение потребностей и предварительные рекомендации",
    price: "от 2 000 ₽",
  },
  {
    service: "ИТ-аудит инфраструктуры",
    description: "Проверка серверов, рабочих мест, сетей и систем хранения данных",
    price: "от 15 000 ₽",
  },
  {
    service: "Проектирование ИТ-решения",
    description: "Разработка архитектуры инфраструктуры под задачи компании",
    price: "от 25 000 ₽",
  },
  {
    service: "Модернизация ИТ-среды",
    description: "Обновление оборудования, настройка систем и повышение надежности",
    price: "от 30 000 ₽",
  },
  {
    service: "Техническое сопровождение",
    description: "Регулярная поддержка, обслуживание и решение технических вопросов",
    price: "от 20 000 ₽",
  },
];

const advantages = [
  "Опыт работы на рынке с 2010 года",
  "Комплексная реализация ИТ-проектов",
  "Системный и профессиональный подход",
  "Сопровождение на всех этапах",
  "Ориентация на реальные задачи бизнеса",
  "Работа с надежными технологическими партнерами",
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (isMenuOpen) {
        setIsHeaderVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY < 40) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Заявка отправлена!");
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className="site">
      <header className={isHeaderVisible ? "header" : "header header-hidden"}>
        <a href="#" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Логотип компании Компас" />
          <span>Компас</span>
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
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
          <a href="#partners" onClick={closeMenu}>
            Партнеры
          </a>
          <a href="#contacts" onClick={closeMenu}>
            Контакты
          </a>
          <a href="#contacts" className="mobile-menu-cta" onClick={closeMenu}>
            Оставить заявку
          </a>
        </nav>

        <a href="#contacts" className="button header-button" onClick={closeMenu}>
          Оставить заявку
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="subtitle">Системный интегратор с 2010 года</p>
            <h1>Надежная ИТ-инфраструктура для стабильной работы бизнеса</h1>
            <p className="hero-text">
              КОМПАС помогает компаниям проектировать, внедрять, модернизировать
              и сопровождать ИТ-инфраструктуру. Мы создаем решения, которые
              повышают надежность, безопасность и эффективность бизнеса.
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
            <h2>Технологический ориентир для вашего бизнеса</h2>
            <p>
              Анализируем текущую ИТ-среду, выявляем риски, проектируем решения
              и сопровождаем инфраструктуру после внедрения.
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
            <h2>КОМПАС — надежный партнер в сфере ИТ-инфраструктуры</h2>
            <p>
              КОМПАС — системный интегратор, который с 2010 года помогает
              компаниям выстраивать надежную, современную и эффективную
              ИТ-инфраструктуру. Компания работает на стыке технологий, бизнеса
              и практических потребностей заказчика.
            </p>
            <p>
              Мы предлагаем не отдельные разрозненные услуги, а продуманные
              ИТ-решения: от обследования текущей среды и аудита до проектирования,
              внедрения, модернизации и дальнейшего сопровождения инфраструктуры.
            </p>
          </div>

          <div className="about-card">
            <h3>Ключевые направления</h3>
            <ul>
              <li>ИТ-аудит и обследование инфраструктуры</li>
              <li>Проектирование серверных и сетевых решений</li>
              <li>Внедрение и модернизация ИТ-систем</li>
              <li>Техническая поддержка и сопровождение</li>
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
            Итоговая стоимость зависит от масштаба инфраструктуры, объема работ
            и требований заказчика. Оставьте заявку, и мы подготовим индивидуальное
            предложение.
          </p>
        </section>

        <section className="section advantages">
          <p className="section-label">Преимущества</p>
          <h2>Почему выбирают КОМПАС</h2>

          <div className="advantages-grid">
            {advantages.map((advantage) => (
              <div key={advantage}>{advantage}</div>
            ))}
          </div>
        </section>

        <section id="partners" className="section about">
          <div>
            <p className="section-label">Партнеры</p>
            <h2>Работаем с проверенными технологическими решениями</h2>
            <p>
              Среди партнеров компании — ведущие российские и международные
              разработчики и поставщики ИТ-решений. Это позволяет подбирать для
              заказчиков надежные технологии в области информационной безопасности,
              серверной инфраструктуры, программного обеспечения и цифровой
              модернизации.
            </p>
          </div>

          <div className="about-card">
            <h3>Партнеры и решения</h3>
            <ul>
              <li>Лаборатория Касперского</li>
              <li>Dr.Web</li>
              <li>РЕД СОФТ</li>
              <li>Astra Linux</li>
              <li>ГК ЛАНИТ</li>
            </ul>
          </div>
        </section>

        <section id="contacts" className="section contact-section">
          <div>
            <p className="section-label">Контакты</p>
            <h2>Оставить заявку</h2>
            <p>
              Заполните форму, и мы свяжемся с вами для уточнения задачи,
              оценки текущей ИТ-среды и подбора подходящего решения.
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

            <textarea placeholder="Опишите задачу или оставьте комментарий" />

            <button type="submit">Отправить заявку</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div>
          <h2>Компас</h2>
          <p>Системный интегратор и технологический партнер бизнеса</p>
        </div>

        <p>© 2026 Компас. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;