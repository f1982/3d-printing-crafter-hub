import { Head2 } from '../atoms/typography'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQProps {
  list: FAQItemData[]
  title: string
}

export interface FAQItemData {
  question: string
  answer: string
}

export default function FAQAccordion({ title, list }: FAQProps) {
  return (
    <div>
      <Head2>{title}</Head2>
      <Accordion type="single" collapsible>
        {list.map((item: FAQItemData, index: number) => {
          return (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-left">
                <span>{item.question}</span>
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}
