import React from 'react';
import styled from '@emotion/styled';

import IPersonal from './IPersonal';
import { Segment, SegmentTitle } from '../../../../components/styledComponents';
import { AboutItem } from '../../About';
import moment from 'moment';
import Lang, { LangString } from '../../../../components/Lang/Lang';

const Label = styled.b`
    letter-spacing: 1px;
`;

type PropsType = {
    personal: IPersonal;
}

const Personal = ({ personal }: PropsType): JSX.Element => {
    const yearOld = new Date(new Date().getTime() - moment(personal.dateofbirth, "YYYY-MM-DD").toDate().getTime()).getFullYear() - 1970;
    const daysSinceBirthday = Math.floor((new Date().getTime() - new Date(2001 + yearOld, 9, 9).getTime()) / 86400000);
    const date_format: string = LangString("date_format");

    return (
        <AboutItem>
            <SegmentTitle><Lang name="about_personal_informations" /></SegmentTitle>
            <Segment>
                <ul>
                    <li><Label><Lang name="about_lastname" /></Label> : <span>{personal.lastname}</span></li>
                    <li><Label><Lang name="about_firstname" /></Label> : <span>{personal.firstname}</span></li>
                    {yearOld && <li><Label><Lang name="about_age" /></Label> : <span title={LangString("about_age_and") + " " + daysSinceBirthday + " " + LangString("about_age_days")}>{yearOld}</span></li>}
                    {date_format.length > 0 && date_format !== "date_format" &&
                        <li>
                            <Label><Lang name="about_date_of_birth" /></Label> : <span>
                                {moment(personal.dateofbirth, "YYYY-MM-DD").format(date_format)}
                            </span>
                        </li>
                    }
                    <li><Label><Lang name="about_location" /></Label> : <span>{personal.place}</span></li>
                    {personal.license?.car?.ownLicense &&
                        <li><Lang name="about_car_license" />{personal.license.car?.ownVehicle && <> + <Lang name="about_license_vehicle" /></>}</li>
                    }
                </ul>
            </Segment>
        </AboutItem>
    );
}

export default Personal;