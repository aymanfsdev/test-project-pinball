import '../../../styles/components/Molecules/custom/Searchboard.scss';

import React, { useState } from 'react';
import Checkbox from '../../Atoms/Form/Checkbox';
import SearchInput from '../../Atoms/Form/SearchInput';
import InputNormal from '../../Atoms/Form/InputNormal';
import Icon from '../../Atoms/Icon';
import { ValueType } from '../../../types';
import TableRow from '../../Organisms/table/orderTable/OrderTableRow'


interface SearchBoardProps {
    className?: string;
    data: any;
    hide?: any,
}

export function SearchBoard({
    className = '',
    data,
    hide = [],
}: SearchBoardProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [values, setvalues] = useState<any>({});
    const handleChange = (e: ValueType) => {
        setvalues({ ...values, [e.name]: isNaN(Number((e.value as string))) ? e.value : Number((e.value as string)) });
    };
    const handleSearchChange = (e: any) => {
        setSearchQuery(e.value as string);
    };

    return (
        <div className="searchBoard-con">
            <div className="border rounded">
                <table className="table table-responsive my-0" id="myTable">
                    <tbody>
                        <tr className="rounded bg-light">
                            <td
                                className="text-capitalize font-bold px-2 text-sm headerclick"
                            >
                                <div className="search-area col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex">
                                    <SearchInput
                                        placeholder={'Greita paieška'}
                                        bgStyles={false}
                                        inputColor={'#2D5474'}
                                        value={searchQuery}
                                        name="searchQuery"
                                        handleChange={handleSearchChange}
                                    />
                                </div>
                            </td>
                            <td
                                className="text-capitalize font-bold px-2 text-sm headerclick"
                            >
                                Quantity
                            </td>
                        </tr>
                        {/* Table body */}
                        {data.map((row: any, index: number) => (
                            <tr
                                key={index}
                                className="contentrows"
                            >
                                {Object.keys(row)
                                    .filter((key) => !hide.includes(key))
                                    .map((key) => (
                                        <TableRow
                                            row={row}
                                            indexData={key}
                                        />
                                    ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
