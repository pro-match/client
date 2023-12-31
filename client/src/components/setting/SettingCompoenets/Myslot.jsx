import React, { useState } from "react";
import SlotTimeSpecifics from "./SlotTimeSpecifics";
import Select from "react-select";
import styled from "styled-components";

const Myslot = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedPerDay, setSelectedPerDay] = useState(1);
  const [selectedGolfCourses, setSelectedGolfCourses] = useState([]);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleDayClick = (day) => {
    const isSelected = selectedDays.includes(day);

    if (isSelected) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handlePerDayChange = (value) => {
    setSelectedPerDay(value);
  };


  const handleGolfCourseSelect = (course) => {
    const isSelected = selectedGolfCourses.includes(course);

    if (isSelected) {
      setSelectedGolfCourses(selectedGolfCourses.filter((selectedCourse) => selectedCourse !== course));
    } else {
      setSelectedGolfCourses([...selectedGolfCourses, course]);
    }
  };

  const [formData, setFormData] = useState({
    locations: []
  });

  const handleLocationChange = (selectedOptions) => {
    // selectedOptions에는 선택된 옵션들이 배열로 들어옵니다.
    const selectedValues = selectedOptions.map((option) => option.value);
    setFormData({
      ...formData,
      locations: selectedValues
    });
  };

  const options = [
    { value: "Location 1", label: "Location 1" },
    { value: "Location 2", label: "Location 2" },
    { value: "Location 3", label: "Location 3" },
    { value: "Location 4", label: "Location 4" }
  ];

  return (
    <div>
      <div>
        <div>Available Slot </div>
        <Container>

        {daysOfWeek.map((day) => (
          <Btn
            key={day}
            onClick={() => {
              handleDayClick(day);
              console.log("Selected Days:", selectedDays);
            }}
            style={{ backgroundColor: selectedDays.includes(day) ? "green" : "" }}
          >
            {day}
          </Btn>
        ))}
       </Container>
      </div>

      <div>
        <div> Time Slot</div>
        <SlotTimeSpecifics />
        
      </div>

      <div>
      <label>Golf Course</label>
      <div>
        <Select
          name="locations"
          isMulti
          value={options.filter((option) =>
            formData.locations.includes(option.value)
          )}
          onChange={handleLocationChange}
          options={options}
        />
      </div>
    </div>

    </div>
  );
};

export default Myslot;



const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Btn = styled.div`
  padding: 1em;
  margin: 5px;
  background-color: #dde3da;
  text-align: center;
  display: flex;
  border: none;
  border-radius: 1em;
  height: 3em;
`;