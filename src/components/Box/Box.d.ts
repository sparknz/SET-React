import React from "react";
export default function Box({ boxType, children, ...props }: {
    boxType: string;
    children: React.ReactChildren;
}): JSX.Element;
