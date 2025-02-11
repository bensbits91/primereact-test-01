import styled from 'styled-components';
import { Card } from 'primereact/card';

const bgColor = (props) => {
    const { size } = props;
    switch (size) {
        case 'small':
            return 'red';
        case 'medium':
            return 'green';
        case 'large':
            return 'blue';
        default:
            return 'black';
    }
};

export const MainCard = styled(Card)`
    // background-color: ${bgColor};

    .p-card-content {
        display: flex;
    }
`;

export const VerticalCard = styled(Card)`
    .p-card-content {
        display: flex;
        flex-direction: column;
    }
`;

export const HorizontalCard = styled(Card)`
    .p-card-content {
        display: flex;
        flex-direction: row;
        column-gap: 10%;
    }
`;
