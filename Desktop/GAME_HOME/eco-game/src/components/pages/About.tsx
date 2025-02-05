import * as React from "react";
import MainLayout from "../templates/MainLayout.tsx";

const About: React.FC = () => {
  return (
    <MainLayout>
      <div style={styles.container}>
        <h1 style={styles.title}>📜 Описание игры</h1>
        <p style={styles.paragraph}>
          Эта игра представляет собой <strong>симуляцию экономической системы</strong>, 
          где вы управляете различными аспектами экономики. Включает в себя <span style={styles.highlight}>временную систему</span>, 
          <span style={styles.highlight}> ресурсы и регионы</span>, <span style={styles.highlight}>производство</span>, 
          <span style={styles.highlight}>торговлю</span>, <span style={styles.highlight}>политическую систему</span> и многое другое.
        </p>

        <h2 style={styles.subtitle}>⏳ Временная система</h2>
        <ul style={styles.list}>
          <li>🕑 1 игровой день = <strong>2 реальных часа</strong>.</li>
          <li>📅 1 игровая неделя = <strong>1 реальный день</strong> (7 игровых дней).</li>
          <li>📆 1 игровой год = <strong>52 реальные недели</strong> (52 реальных дня).</li>
          <li>🏛 Выборы проводятся <strong>раз в игровой год</strong>.</li>
        </ul>

        <h2 style={styles.subtitle}>🌍 Ресурсы и регионы</h2>
        <p style={styles.paragraph}>
          Ресурсы распределены <strong>неравномерно</strong>. Например, в одном регионе может быть много <span style={styles.highlight}>нефти</span>, 
          а в другом – <span style={styles.highlight}>лесов</span> или <span style={styles.highlight}>плодородных земель</span>.  
          Они делятся на:  
        </p>
        <ul style={styles.list}>
          <li>⛏ Природные: нефть, газ, руда, древесина, вода.</li>
          <li>🌾 Сельскохозяйственные: зерно, овощи, фрукты, скот.</li>
        </ul>

        <h2 style={styles.subtitle}>🏭 Производство</h2>
        <p style={styles.paragraph}>
          В игре вы строите <strong>предприятия</strong> для добычи ресурсов и производства товаров.  
          Примеры цепочек:  
        </p>
        <ul style={styles.list}>
          <li>🌲 Древесина → 🪑 Мебель</li>
          <li>🛢 Нефть → 🔧 Пластик → 🧸 Игрушки</li>
          <li>🌾 Зерно → 🍞 Хлеб</li>
        </ul>

        <h2 style={styles.subtitle}>💰 Торговля</h2>
        <p style={styles.paragraph}>
          Игроки могут продавать товары своим <strong>розничным магазинам</strong> или другим игрокам.  
          Цена зависит от <span style={styles.highlight}>спроса и предложения</span>, а также от политики рынка.  
          Вы <strong>сами устанавливаете цены</strong> на свою продукцию.
        </p>

        <h2 style={styles.subtitle}>🏛 Политическая система</h2>
        <p style={styles.paragraph}>
          Выборы проходят <strong>раз в игровой год</strong>. Игроки могут выдвигаться на пост <strong>мэра</strong>, 
          <strong>губернатора</strong> или <strong>президента</strong>.  
          Власть позволяет управлять <span style={styles.highlight}>налогами и законами</span>.
        </p>

        <h2 style={styles.subtitle}>🚚 Логистика</h2>
        <p style={styles.paragraph}>
          Доставка товаров возможна разными способами:
        </p>
        <ul style={styles.list}>
          <li>🚛 Грузовики</li>
          <li>🚂 Поезда</li>
          <li>✈️ Самолеты</li>
        </ul>
        <p style={styles.paragraph}>
          Игроки могут создавать <strong>логистические компании</strong> и управлять транспортом.
        </p>

        <h2 style={styles.subtitle}>🎯 Заключение</h2>
        <p style={styles.paragraph}>
          Это лишь краткий обзор игры. Вперед к <strong>новым открытиям</strong> и успешному управлению экономикой! 🚀
        </p>
      </div>
    </MainLayout>
  );
};

// 💡 Стилизация
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
    color: "#333",
    marginBottom: "15px",
  },
  subtitle: {
    fontSize: "24px",
    color: "#555",
    marginTop: "20px",
    borderBottom: "2px solid #ddd",
    paddingBottom: "5px",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#444",
    marginBottom: "10px",
  },
  highlight: {
    backgroundColor: "#ffeeba",
    padding: "2px 6px",
    borderRadius: "5px",
    fontWeight: "bold",
  },
  list: {
    listStyleType: "none", // Убирает маркеры списка
    paddingLeft: "0", // Убирает отступ слева
    fontSize: "16px",
    color: "#444",
  },
};

export default About;
