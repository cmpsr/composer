import React, { useEffect } from 'react';

import { LinkNode } from '@lexical/link';
import { LinkPlugin as LexicalLinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export const LinkPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor) return;
    const removeNodeListener = editor.registerNodeTransform(LinkNode, (node) => {
      if (node && node.getTarget() !== '_blank') node.setTarget('_blank');
    });
    return () => removeNodeListener();
  }, [editor]);

  return <LexicalLinkPlugin />;
};
