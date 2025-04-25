import { Heading } from './components/Heading';

import './style/theme.css';
import './style/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ab debitis
        quod accusamus molestias, similique voluptas assumenda fugit ea nesciunt
        sunt accusantium, maiores odit voluptatem. Tempore cum soluta nesciunt
        alias.
      </p>
    </>
  );
}
