import {HelloWorld} from "../components/HelloWorld";
import {storiesOf} from '@storybook/react';

const stories = storiesOf('App', module)

stories.add('HelloWorld', () => <HelloWorld />)