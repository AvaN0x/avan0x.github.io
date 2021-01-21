import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';
import IPersonal from './IPersonal';
import { Segment, SegmentTitle } from '../../../../components/styledComponents';
import { AboutItem } from '../../About';
import moment from 'moment';

const Label = styled.b`
    letter-spacing: 1px;
`;

type PropsType = {
    personal: IPersonal;
}

const PersonalComponent = ({ personal }: PropsType) => {
    const yearOld = new Date(new Date().getTime() - moment(personal.dateofbirth, "YYYY-MM-DD").toDate().getTime()).getFullYear() - 1970;
    const daysSinceBirthday = Math.floor((new Date().getTime() - new Date(2001 + yearOld, 9, 9).getTime()) / 86400000);

    return (
        <AboutItem>
            <SegmentTitle>Informations personnelles</SegmentTitle>
            <Segment>
                <ul>
                    <li><Label>Nom</Label> : <span>{personal.lastname}</span></li>
                    <li><Label>Prénom</Label> : <span>{personal.firstname}</span></li>
                    {yearOld && <li><Label>Age</Label> : <span title={"et " + daysSinceBirthday + " jours."}>{yearOld}</span></li>}
                    <li><Label>Date de naissance</Label> : <span>{moment(personal.dateofbirth, "YYYY-MM-DD").format("DD/MM/YYYY")}</span></li>
                    <li><Label>Lieu</Label> : <span>{personal.place}</span></li>
                </ul>
            </Segment>
        </AboutItem>
    );
}

export default PersonalComponent;