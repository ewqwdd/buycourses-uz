import { useLocation } from 'react-router'
import { Card } from '../../shared/ui/Card'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import { ShopSidebar } from '../../widgets/ShopSidebar'
import { Link } from 'react-router-dom'
import Back from '../../shared/ui/Back/Back'
import { Button } from '../../shared/ui/Button'
import RightUp from '../../shared/icons/RightUp.svg'

const item = {
  name: 'Воронка продаж 4.0 (Продвинутая версия)',
  category: 'Программы и скрипты',
  slug: 'sales-funnel',
  content: `
<p>1) Открыть главное окно антивируса</p>
<p>2) В появившимся окне нажать кнопку "Меню"</p>
<p>3) В открывшемся меню выбрать "Мои подписки"</p>
<p>4) Теперь нажмите на кнопку "Введите действительный код активации"</p>
<p>5) Далее появится окно ввода ключа, но мы будем активировать с помощью файла лицензии, поэтому жмем "Использовать файл лицензии"</p>
<p>6) Выберите файл лицензии в проводнике Windows и нажмите "Открыть"</p>
<p>7) Готово</p>
`,
}

export default function Item() {
  const { pathname } = useLocation()
  const splitted = pathname.split('/')
  const slug = splitted[splitted.length - 1]

  const back = (
    <Link to={'/' + slug}>
      <Back />
    </Link>
  )

  return (
    <Main>
      <DefaultHeader title={item.name} subTitle={back} />
      <div className="flex gap-20 mt-10">
        <ShopSidebar />
        <Card className="flex-1 justify-center p-10 gap-5 items-start self-start">
          <div
            className="text-sm font-medium text-secondary max-w-[480px]"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
          <Button className="min-w-[328px]">
            Скачать <RightUp className="size-4" />
          </Button>
        </Card>
      </div>
    </Main>
  )
}
