import React from 'react';
import { Collapse } from 'react-collapse';

import Text from 'components/Text';
import A from 'components/A';
import Image from 'components/Image';
import Detail from 'components/Detail';

import { ListItem, CollapseContent, CollapseItem } from './styles';

const ProjectItem = (props) => {
  const {
    isOpened,
    toggleOpen,
    name,
    link = '#',
    image,
    lang,
    description,
    result,
  } = props;

  return (
    <ListItem key={name}>
      <Text type="subtitle" onClick={toggleOpen(name)}>
        {name}
      </Text>
      <Collapse isOpened={isOpened}>
        <CollapseContent>
          <CollapseItem>
            <Image
              src={image}
              alt={name}
              asBackground
              height="300px"
              width="100%"
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '20px 0 10px',
              }}
            >
              <A href={link}>GITHUB</A>
              <Text type="boldBody" color="logo">
                {lang}
              </Text>
            </div>
          </CollapseItem>
          <CollapseItem>
            <Detail label="Approach" content={description} lang="R" />
            <Detail label="Result" content={result} />
          </CollapseItem>
        </CollapseContent>
      </Collapse>
    </ListItem>
  );
};

export default ProjectItem;
