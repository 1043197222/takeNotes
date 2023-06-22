import React, { useEffect, useState } from 'react';
import vkbeautify from 'vkbeautify';

const 预览Xml = () => {
  const [xml, setXml] = useState<string>('');
  useEffect(() => {
    const xml = `<note><to>Tove</to><from>Jani</from></note>`;
    const prettyXml = vkbeautify.xml(xml);
    const htmlSafeXml = prettyXml.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    setXml(htmlSafeXml);
  }, []);
  return <div>
    <pre dangerouslySetInnerHTML={{ __html: xml }} />
  </div>;
};

export default 预览Xml;