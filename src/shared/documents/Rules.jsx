import { memo } from 'react'
import { Title } from '../ui/Title'

export default memo(function Rules() {
  return (
    <div className="pb-48 max-w-[1440px] px-10 mx-auto py-8 text-secondary [&_h2]:text-primary [&_h1]:text-primary [&_h3]:text-primary [&_a]:text-accentSecondary">
      <Title title={'Правила использования платформы'} />
      <h1 className="text-3xl font-bold text-center mb-8">Правила использования платформы</h1>
      <p className="text-right text-sm text-teritary">Последнее обновление: 13.01.2025</p>

      <section className="mt-6">
        <p>
          Данные правила (далее – «Правила») регулируют использование веб-сайта{' '}
          <a href="https://www.buycourses.uz/" className="underline">
            https://www.buycourses.uz/
          </a>{' '}
          (далее – «Платформа») всеми зарегистрированными пользователями (далее – «Пользователи»), включая Покупателей и
          Продавцов.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">1. Общие положения</h2>
        <ul className="pl-6">
          <li>
            1.1 &nbsp;&nbsp;Использование Платформы возможно только после регистрации и подтверждения учетной записи.
          </li>
          <li>
            1.2 &nbsp;&nbsp;Пользователь обязуется предоставлять актуальные и достоверные данные при регистрации и
            использовании Платформы.
          </li>
          <li>1.3 &nbsp;&nbsp;Запрещается размещать недостоверные, мошеннические или неактуальные предложения.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">2. Размещение предложений Продавцом</h2>
        <ul className="pl-6">
          <li>
            2.1 &nbsp;&nbsp;Продавец обязан подробно и точно описывать курсы, предоставлять рабочие ссылки и актуальную
            информацию.
          </li>
          <li>
            2.2 &nbsp;&nbsp;Запрещено размещение ссылок на материалы, нарушающие авторские права или законодательство
            Республики Узбекистан.
          </li>
          <li>
            2.3 &nbsp;&nbsp;Все материалы должны размещаться на внешних облачных сервисах, ссылки на которые
            предоставляются Покупателям.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">3. Процедура покупки</h2>
        <ul className="pl-6">
          <li>
            3.1 &nbsp;&nbsp;Покупатель обязан оплатить полную стоимость лота через внутреннюю платежную систему
            Платформы.
          </li>
          <li>
            3.2 &nbsp;&nbsp;После завершения оплаты Покупатель получает доступ к ссылке, предоставленной Продавцом.
          </li>
          <li>
            3.3 &nbsp;&nbsp;В случае обнаружения недействительности ссылки или несоответствия материалов описанию
            Покупатель имеет право открыть спор в течение 24 часов с момента покупки.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">4. Разрешение споров</h2>
        <ul className="pl-6">
          <li>
            4.1 &nbsp;&nbsp;Администратор выступает посредником при разрешении споров между Продавцом и Покупателем.
          </li>
          <li>
            4.2 &nbsp;&nbsp;Для рассмотрения спора Покупатель обязан предоставить доказательства недействительности
            ссылки или несоответствия материалов.
          </li>
          <li>
            4.3 &nbsp;&nbsp;Решение по спору выносится в течение 5 рабочих дней. В случае правоты Покупателя сумма
            возвращается ему.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">5. Комиссия и вывод средств</h2>
        <ul className="pl-6">
          <li>
            5.1 &nbsp;&nbsp;Платформа взимает комиссию в размере 2% от суммы сделки, которая удерживается автоматически
            при выводе средств Продавцом.
          </li>
          <li>5.2 &nbsp;&nbsp;Средства доступны для вывода через системы UZCARD и HUMO.</li>
          <li>5.3 &nbsp;&nbsp;Вывод средств возможен только при отсутствии открытых споров.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">6. Ответственность пользователей</h2>
        <ul className="pl-6">
          <li>
            6.1 &nbsp;&nbsp;Пользователи несут полную ответственность за соблюдение условий данных Правил и
            законодательства Республики Узбекистан.
          </li>
          <li>
            6.2 &nbsp;&nbsp;В случае нарушения правил Администратор оставляет за собой право приостановить или
            заблокировать учетную запись пользователя без предварительного уведомления.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">7. Изменения в Правилах</h2>
        <ul className="pl-6">
          <li>
            7.1 &nbsp;&nbsp;Администратор оставляет за собой право изменять данные Правила с предварительным
            уведомлением пользователей за 7 календарных дней.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">8. Применимое законодательство</h2>
        <ul className="pl-6">
          <li>
            8.1 &nbsp;&nbsp;Настоящие Правила регулируются в соответствии с:
            <ul className="list-disc pl-10">
              <li>Гражданским кодексом Республики Узбекистан;</li>
              <li>Законом РУз «Об электронной коммерции» (№ЗРУ-561);</li>
              <li>Законом РУз «Об информации» (№ЗРУ-370).</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  )
})
