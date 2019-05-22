```
import { Cheveron, Lock } from './index';
import styled from 'styled-components';
import {
    backgroundColor,
} from "../SETThemeProvider";

<div>
    <div style={{ padding:  16, background: "black" }}>
        <Icon icon={Lock} />
        <Icon size={40} icon={Lock}/>
    </div>
    <Icon icon={Lock.base.primary.base} />
    <Icon icon={Lock.base.black} />
</div>
```