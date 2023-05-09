import 'styled-components';
import { AppTheme } from './appTheme';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme extends AppTheme {}
}
