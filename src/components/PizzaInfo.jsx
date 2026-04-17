import React from "react";

function PizzaInfo() {
  return (
    <section className="pizza-info">
      <p className="breadcrumb">
        Anasayfa - Seçenekler - <span>Sipariş Oluştur</span>
      </p>

      <h2>Position Absolute Acı Pizza</h2>

      <div className="pizza-meta">
        <p className="price">85.50₺</p>
        <div className="rating-info">
          <span>4.9</span>
          <span>(200)</span>
        </div>
      </div>

      <p className="description">
        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza
        tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
        düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
        lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </p>
    </section>
  );
}

export default PizzaInfo;