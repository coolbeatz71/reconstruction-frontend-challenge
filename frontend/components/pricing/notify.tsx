import { FC } from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

const Notify: FC<{}> = () => {
    return (
        <div className="notify__wrapper">
            <Text>Don’t see a class that works for you?</Text>
            <button className="card___cta button-primary-l" style={{ width: '170px' }}>
                Notify Me
            </button>
        </div>
    );
};

export default Notify;
