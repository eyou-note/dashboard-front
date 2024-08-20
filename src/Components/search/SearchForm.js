import { useState, useRef, useEffect } from "react";
import { TextField, InputAdornment, IconButton, Button, Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ReplayIcon from "@mui/icons-material/Replay";

export default function SearchForm({ onHandleSubmit, onHandleReset }) {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(false);
    const inputRef = useRef(null);

    const handleClear = () => {
        setInputValue("");
        inputRef.current.focus();
    };

    const handleChange = e => {
        setInputValue(e.target.value);
        setError(false);
    };

    const handleSubmit = () => {
        if (!inputValue) {
            setError(true);
            return;
        }

        onHandleSubmit(inputValue);
    };

    const handleReset = () => {
        setInputValue(""); // 입력 필드 초기화
        setError(false); // 에러 메시지 초기화
        inputRef.current.focus(); // 입력 필드에 포커스 설정
        onHandleReset(); // App 컴포넌트에서 상태 초기화
    };

    return (
        <div className="centered-form-container">
            <div className="centered-form">
                <TextField
                    autoFocus
                    size="small"
                    variant="outlined"
                    placeholder="TID or XTID"
                    className="text-field"
                    sx={{ mr: 2 }}
                    value={inputValue}
                    onChange={handleChange}
                    inputRef={inputRef}
                    error={error} // 에러 상태 설정
                    helperText={error ? "This TID field is required.." : ""}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {inputValue && (
                                    <IconButton onClick={handleClear}>
                                        <ClearIcon />
                                    </IconButton>
                                )}
                            </InputAdornment>
                        ),
                    }}
                />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button variant="contained" size="small" color="primary" sx={{ mr: 1 }} onClick={handleSubmit}>
                        Find!
                    </Button>
                    <IconButton size="small" color="success" onClick={handleReset}>
                        <ReplayIcon /> {/* Reset 아이콘 */}
                    </IconButton>
                </Box>
            </div>
        </div>
    );
}
