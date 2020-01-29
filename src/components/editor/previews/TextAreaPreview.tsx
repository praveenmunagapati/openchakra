import React from "react";
import { Textarea } from "@chakra-ui/core";
import { useInteractive } from "../../../hooks/useInteractive";

const TextAreaPreview: React.FC<{ component: IComponent }> = ({
  component
}) => {
  const { props, ref } = useInteractive(component);
  return <Textarea ref={ref} {...props} />;
};

export default TextAreaPreview;
