import { Button } from '../../shared/ui/Button'
import { Card } from '../../shared/ui/Card'
import { TextArea } from '../../shared/ui/TextArea'
import { Title } from '../../shared/ui/Title'
import { AsideWrapper } from '../../widgets/AsideWrapper'
import { CreationCard } from '../../widgets/CreationCard'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'

export default function Create() {
  return (
    <Main>
      <Title title="Создание объявления" />
      <DefaultHeader title={'Создание объявления'} subTitle={'0 товаров'} />
      <div className="flex gap-20 mt-10">
        <AsideWrapper className="gap-4">
          <CreationCard />
        </AsideWrapper>
        <Card className="p-10 gap-5 flex-1 flex flex-col">
          <TextArea className="resize-none" placeholder="Введите текст" />
          <Button className="min-w-[328px] self-start">Загрузить материалы</Button>
        </Card>
      </div>
    </Main>
  )
}
