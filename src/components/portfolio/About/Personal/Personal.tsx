import React from 'react';
import styled from '@emotion/styled';

import IPersonal from './IPersonal';
import { Segment, SegmentTitle } from 'components/styledComponents';
import { AboutItem } from 'components/portfolio/About';

import format from 'string-format';

import Lang, { LangString } from 'components/Lang/Lang';
import LangsList from 'components/Lang/LangsList';
import dayjs from 'dayjs';

const Label = styled.b`
    letter-spacing: 1px;
`;

type PropsType = {
    personal: IPersonal;
};

const Personal = ({ personal }: PropsType): JSX.Element => {
    const yearOld =
        new Date(
            new Date().getTime() -
                dayjs(personal.dateofbirth, 'YYYY-MM-DD').toDate().getTime()
        ).getFullYear() - 1970;
    const daysSinceBirthday = Math.floor(
        (new Date().getTime() - new Date(2001 + yearOld, 9, 9).getTime()) /
            86400000
    );
    const date_format: string = LangString(LangsList.date_format);

    return (
        <AboutItem>
            <SegmentTitle>
                <Lang name={LangsList.about_personal_information} />
            </SegmentTitle>
            <Segment>
                <ul>
                    <li>
                        <Label>
                            <Lang name={LangsList.about_lastname} />
                        </Label>{' '}
                        : <span>{personal.lastname}</span>
                    </li>
                    <li>
                        <Label>
                            <Lang name={LangsList.about_firstname} />
                        </Label>{' '}
                        : <span>{personal.firstname}</span>
                    </li>
                    {yearOld && (
                        <li>
                            <Label>
                                <Lang name={LangsList.about_age} />
                            </Label>{' '}
                            :{' '}
                            <span
                                title={format(
                                    LangString(LangsList.about_age_days),
                                    daysSinceBirthday.toString()
                                )}
                            >
                                {yearOld}
                            </span>
                        </li>
                    )}
                    {date_format.length > 0 &&
                        date_format !== 'date_format' && (
                            <li>
                                <Label>
                                    <Lang
                                        name={LangsList.about_date_of_birth}
                                    />
                                </Label>{' '}
                                :{' '}
                                <span>
                                    {dayjs(
                                        personal.dateofbirth,
                                        'YYYY-MM-DD'
                                    ).format(date_format)}
                                </span>
                            </li>
                        )}
                    <li>
                        <Label>
                            <Lang name={LangsList.about_location} />
                        </Label>{' '}
                        :{' '}
                        <span>
                            <Lang content={personal.place} />
                        </span>
                    </li>
                    {personal.license?.car?.ownLicense && (
                        <li>
                            <Lang name={LangsList.about_car_license} />
                            {personal.license.car?.ownVehicle && (
                                <>
                                    {' '}
                                    +{' '}
                                    <Lang
                                        name={LangsList.about_license_vehicle}
                                    />
                                </>
                            )}
                        </li>
                    )}
                </ul>
            </Segment>
        </AboutItem>
    );
};

export default Personal;
