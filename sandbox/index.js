import React from 'react';
import ReactDOM from 'react-dom';
import {
  Alert, Button, Blank, Card, Grid, Input, Title,
} from '../src';

const Sandbox = () => {
  const gridStyle = {
    padding: '5px',
  };

  return (
    <Grid flow={'column'} stretch={'width'} padding={15}>
      <Card title={'Alert component'} theme={'light'} shadow={0}>
        <Grid flow={'row'} stretch={'width'}>
          <Grid width={6} padding={5} flow={'column'}>
            <Grid stretch={'width'}>
              <Alert theme="danger">Danger</Alert>
            </Grid>
            <Grid stretch={'width'}>
              <Alert dismissible theme="warning">Warning</Alert>
            </Grid>
            <Grid stretch={'width'}>
              <Alert dismissible theme="success">Success</Alert>
            </Grid>
            <Grid stretch={'width'}>
              <Alert theme="info">Info</Alert>
            </Grid>
          </Grid>
          <Grid width={6} padding={5} flow={'column'}>
            <Grid stretch={'width'}>
              <Alert outline theme="danger">Danger</Alert>
            </Grid>
            <Grid stretch={'width'}>
              <Alert dismissible outline theme="warning">Warning</Alert>
            </Grid>
            <Grid stretch={'width'}>
              <Alert dismissible outline theme="success">Success</Alert>
            </Grid>
            <Grid stretch={'width'}>
              <Alert outline theme="info">Info</Alert>
            </Grid>
          </Grid>
        </Grid>
      </Card>

      <Card outline icon={<i className={'fas fa-suitcase '} />} title={'Button component'}>
        <Title theme={'danger'} border={'danger'}>Colors</Title>
        <Blank border={'danger'} rounded={5} shadow={0} indent={15}>
          <Grid wrap>
            <Grid flow={'row'} width={6} stretch={'full'} align={'center'} wrap padding={10}>
              <Grid css={gridStyle}>
                <Button theme="primary">Primary</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button theme="yellow">Yellow</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button theme="danger">Danger</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button theme="warning">Warning</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button theme="success">Success</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button theme="info">Info</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button theme="dark">Dark</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button theme="light">Light</Button>
              </Grid>
            </Grid>
            <Grid flow={'row'} width={6} stretch={'full'} align={'center'} wrap padding={10}>
              <Grid css={gridStyle}>
                <Button type={'rounded'} theme="primary">Primary</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type={'rounded'} theme="yellow">Yellow</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type={'rounded'} theme="danger">Danger</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type={'rounded'} theme="warning">Warning</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type={'rounded'} theme="success">Success</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type={'rounded'} theme="info">Info</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type={'rounded'} theme="dark">Dark</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type={'rounded'} theme="light">Light</Button>
              </Grid>
            </Grid>
            <Grid flow={'row'} width={6} stretch={'full'} align={'center'} wrap padding={10}>
              <Grid css={gridStyle}>
                <Button type="text" theme="primary">Primary</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="text" theme="yellow">Yellow</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="text" theme="danger">Danger</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="text" theme="warning">Warning</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="text" theme="success">Success</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="text" theme="info">Info</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="text" theme="dark">Dark</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="text" theme="light">Light</Button>
              </Grid>
            </Grid>
            <Grid flow={'row'} width={6} stretch={'full'} align={'center'} wrap padding={10}>
              <Grid css={gridStyle}>
                <Button type="outline" theme="primary">Primary</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="outline" theme="yellow">Yellow</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="outline" theme="danger">Danger</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="outline" theme="warning">Warning</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="outline" theme="success">Success</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="outline" theme="info">Info</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="outline" theme="dark">Dark</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="outline" theme="light">Light</Button>
              </Grid>
            </Grid>
          </Grid>
        </Blank>
        <Title>Sizes</Title>
        <Blank border={'light'} rounded={5} shadow={3} indent={15}>
          <Grid flow={'row'}>
            <Grid flow={'column'} align={'center'} width={4} wrap padding={10}>
              <Grid css={gridStyle}>
                <Button size={1}>Extra-Small</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button size={2}>Small</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button size={3}>Medium</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button size={4}>Large</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button size={5}>Extra-Large</Button>
              </Grid>
            </Grid>
            <Grid flow={'row'} valign={'center'} align={'center'} width={4} wrap padding={10}>
              <Grid css={gridStyle}>
                <Button type="outline" theme="danger" size={2}>Small</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="outline" theme="danger" size={3}>Medium</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="outline" theme="danger" size={4}>Large</Button>
              </Grid>
            </Grid>
            <Grid flow={'column'} align={'center'} width={4} wrap padding={10}>
              <Grid css={gridStyle}>
                <Button type="text" theme="success" size={2}>Small</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="text" theme="success" size={3}>Medium</Button>
              </Grid>
              <Grid css={gridStyle}>
                <Button type="text" theme="success" size={4}>Large</Button>
              </Grid>
            </Grid>
          </Grid>
        </Blank>
        <Title>Disabled</Title>
        <Blank border={'light'} rounded={5} shadow={3} indent={15}>
          <Grid flow={'row'} stretch={'full'} align={'center'} wrap padding={10}>
            <Grid css={gridStyle}>
              <Button disabled>Primary</Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button disabled type="rounded">Primary</Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button disabled type="text">Primary</Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button disabled type="outline">Primary</Button>
            </Grid>
          </Grid>
        </Blank>
        <Title>Icons</Title>
        <Blank border={'light'} rounded={5} shadow={3} indent={15}>
          <Grid flow={'row'} stretch={'full'} align={'center'} valign={'center'} wrap padding={10}>
            <Grid css={gridStyle}>
              <Button size={1} icon={<i className="fas fa-suitcase"></i>}></Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button size={2} icon={<i className="fas fa-suitcase"></i>}></Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button icon={<i className="fas fa-suitcase"></i>}></Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button size={4} icon={<i className="fas fa-suitcase"></i>}></Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button size={5} icon={<i className="fas fa-suitcase"></i>}></Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button size={1} theme={'success'} icon={<i className="fas fa-plus"></i>}>Add</Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button size={2} theme={'success'} icon={<i className="fas fa-plus"></i>}>Add</Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button theme={'success'} icon={<i className="fas fa-plus"></i>}>Add</Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button size={4} theme={'success'} icon={<i className="fas fa-plus"></i>}>Add</Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button size={5} theme={'success'} icon={<i className="fas fa-plus"></i>}>Add</Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button size={1} theme={'danger'} icon={<i className="fas fa-trash"></i>}>Delete</Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button size={2} theme={'danger'} icon={<i className="fas fa-trash"></i>}>Delete</Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button theme={'danger'} icon={<i className="fas fa-trash"></i>}>Delete</Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button size={4} theme={'danger'} icon={<i className="fas fa-trash"></i>}>Delete</Button>
            </Grid>
            <Grid css={gridStyle}>
              <Button size={5} theme={'danger'} icon={<i className="fas fa-trash"></i>}>Delete</Button>
            </Grid>
          </Grid>
        </Blank>
      </Card>

      <Card outline title={'input component'}>
        <Grid flow={'row'} stretch={'width'} wrap>
          <Grid width={4} padding={5}>
            <Input placeholder='First name'/>
          </Grid>
          <Grid width={4} padding={5}>
            <Input placeholder='Last name'/>
          </Grid>
          <Grid width={4} padding={5}>
            <Input placeholder='Country' value={'United States'}/>
          </Grid>
          <Grid width={4} padding={5}>
            <Input valid placeholder='Email' value='test@test.ru'/>
          </Grid>
          <Grid width={4} padding={5}>
            <Input error placeholder='Phone' value='+787267333'/>
          </Grid>
          <Grid width={4} padding={5}>
            <Input error placeholder='Password' type={'password'} value='test@test'/>
          </Grid>
        </Grid>
      </Card>

      <Card outline title={'grid component'}>
        <Blank>
          <Grid wrap>
            <Grid padding={5} width={1}><Blank align={'center'}>size=1</Blank></Grid>
            <Grid padding={5} width={1}><Blank align={'center'}>size=1</Blank></Grid>
            <Grid padding={5} width={1}><Blank align={'center'}>size=1</Blank></Grid>
            <Grid padding={5} width={1}><Blank align={'center'}>size=1</Blank></Grid>
            <Grid padding={5} width={1}><Blank align={'center'}>size=1</Blank></Grid>
            <Grid padding={5} width={1}><Blank align={'center'}>size=1</Blank></Grid>
            <Grid padding={5} width={1}><Blank align={'center'}>size=1</Blank></Grid>
            <Grid padding={5} width={1}><Blank align={'center'}>size=1</Blank></Grid>
            <Grid padding={5} width={1}><Blank align={'center'}>size=1</Blank></Grid>
            <Grid padding={5} width={1}><Blank align={'center'}>size=1</Blank></Grid>
            <Grid padding={5} width={1}><Blank align={'center'}>size=1</Blank></Grid>
            <Grid padding={5} width={1}><Blank align={'center'}>size=1</Blank></Grid>
          </Grid>
          <Grid wrap>
            <Grid padding={5} width={2}><Blank align={'center'}>size=2</Blank></Grid>
            <Grid padding={5} width={2}><Blank align={'center'}>size=2</Blank></Grid>
            <Grid padding={5} width={2}><Blank align={'center'}>size=2</Blank></Grid>
            <Grid padding={5} width={2}><Blank align={'center'}>size=2</Blank></Grid>
            <Grid padding={5} width={2}><Blank align={'center'}>size=2</Blank></Grid>
            <Grid padding={5} width={2}><Blank align={'center'}>size=2</Blank></Grid>
          </Grid>
          <Grid wrap>
            <Grid padding={5} width={3}><Blank align={'center'}>size=3</Blank></Grid>
            <Grid padding={5} width={3}><Blank align={'center'}>size=3</Blank></Grid>
            <Grid padding={5} width={3}><Blank align={'center'}>size=3</Blank></Grid>
            <Grid padding={5} width={3}><Blank align={'center'}>size=3</Blank></Grid>
          </Grid>
          <Grid wrap>
            <Grid padding={5} width={4}><Blank align={'center'}>size=4</Blank></Grid>
            <Grid padding={5} width={4}><Blank align={'center'}>size=4</Blank></Grid>
            <Grid padding={5} width={4}><Blank align={'center'}>size=4</Blank></Grid>
          </Grid>
          <Grid wrap>
            <Grid padding={5} width={6}><Blank align={'center'}>size=6</Blank></Grid>
            <Grid padding={5} width={6}><Blank align={'center'}>size=6</Blank></Grid>
          </Grid>
          <Grid wrap>
            <Grid padding={5} width={12}><Blank align={'center'}>size=12</Blank></Grid>
          </Grid>
        </Blank>
      </Card>
    </Grid>
  );
};

ReactDOM.render(<Sandbox/>, document.getElementById('root'));
