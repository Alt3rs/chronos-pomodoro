import { Heading } from './components/Heading';

import './style/theme.css';
import './style/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='string'>
        Olá mundo
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
