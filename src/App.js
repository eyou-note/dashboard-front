import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import { SearchForm, TransactionResult, Spinner } from "./Components";

function App() {
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(true);
    const [data, setData] = useState(null); // API로부터 받아온 데이터
    const [error, setError] = useState(null); // 오류 상태 관리
    const data1 = {
        status: "SUCCESS",
        activeStep: 1,
        steps: [
            {
                status: "SUCCESS",
                phase: 0,
                transactionLog: "PHASE 0 Transaction Log..",
            },
            {
                status: "SUCCESS",
                phase: 1,
                transactionLog: "PHASE 1 Transaction Log..",
            },
            {
                status: "DISABLED",
                phase: 2,
                transactionLog: "PHASE 2 Transaction Log..",
            },
        ],
    };

    const handleSubmit = inputValue => {
        setLoading(true); // 로딩 시작
        setError(null);

        // 0.5초 대기 후 요청 시작
        setTimeout(async () => {
            try {
                // const response = await axios.get(`http://localhost:8080?tid=${inputValue}`);
                setData(data1); // 데이터 설정
            } catch (err) {
                setError("Failed to fetch data. Please try again.");
            } finally {
                setLoading(false); // 로딩 완료 상태로 전환
            }
        }, 1000); // 0.5초 대기
    };

    const handleReset = () => {
        setData(null); // 데이터 초기화
        setLoading(false); // 로딩 상태 초기화
        setError(null); // 에러 상태 초기화
    };

    return (
        <>
            <SearchForm onHandleSubmit={handleSubmit} onHandleReset={handleReset} />
            {loading && <Spinner />} {/* 로딩 중일 때 Spinner 표시 */}
            {!loading && data && <TransactionResult data={data} />} {/* 로딩이 끝나고 데이터가 있으면 TransactionResult 표시 */}
            {error && <div>{error}</div>} {/* 오류가 발생하면 오류 메시지 표시 */}
        </>
    );
}

export default App;
