import { AlertTriangleIcon, PaintbrushVertical } from 'lucide-react-native';
import { Text } from 'react-native';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

export const HomeView: React.FC = () => {
  return (
    <Accordion
      type="multiple"
      collapsible
      defaultValue={['item-1']}
      className="native:max-w-md w-full max-w-sm">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <AlertTriangleIcon className="h-4 w-4" color="red" />
          <Text>What is this app?</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text>
            This app is a simple app that allows you to create a counter and increment or decrement
            using Redux Toolkit, via async and sync actions. Also, it user Redux RTK to fetch data
            from an API.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <PaintbrushVertical className="h-4 w-4" color="blue" />
          <Text>What about that cool UI?</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text>
            This app uses Nativewind to style the UI. It is a utility-first library that allows you
            to style your components using Tailwind CSS. But also we include some components from
            Shadcn UI (react-native-reusables)
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
