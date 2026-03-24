import { Container } from '@/components/ui/container'
import { ColorsSection } from './_sections/ColorsSection'
import { TypographySection } from './_sections/TypographySection'
import { ButtonsSection } from './_sections/ButtonsSection'
import { FormsSection } from './_sections/FormsSection'
import { CardsSection } from './_sections/CardsSection'
import { ListsSection } from './_sections/ListsSection'
import { TablesSection } from './_sections/TablesSection'
import { FeedbackSection } from './_sections/FeedbackSection'
import { NavigationSection } from './_sections/NavigationSection'
import { MediaSection } from './_sections/MediaSection'
import { LayoutSection } from './_sections/LayoutSection'
import { SpecializedSection } from './_sections/SpecializedSection'

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <Container size="lg">
        <header className="py-16 border-b border-plum/10 mb-16">
          <p className="text-eyebrow mb-4">Design System</p>
          <h1 className="font-display text-[52px] font-light text-plum">
            entre ser
          </h1>
          <p className="mt-4 text-lg text-plum/60 max-w-xl">
            Biblioteca de componentes para a plataforma de saúde mental para tentantes.
          </p>
        </header>

        <ColorsSection />
        <TypographySection />
        <ButtonsSection />
        <FormsSection />
        <CardsSection />
        <ListsSection />
        <TablesSection />
        <FeedbackSection />
        <NavigationSection />
        <MediaSection />
        <LayoutSection />
        <SpecializedSection />
      </Container>
    </main>
  )
}
