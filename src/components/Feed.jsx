import { Box} from "@mui/material";
import React from "react";
import {useEffect, useState, useRef} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as d3 from 'd3'

const Feed = ()=>{
    const [data, setData] = useState([25, 50, 35, 15, 94, 10])
    const svgRef = useRef();

    useEffect(()=>{
        //setting up svg
        const w = 360;
        const h = 90;
        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h)
            .style('background', '#d3d3d3')
            .style('margin-top', '20');
        //setting the scaling
        const xScale = d3.scaleLinear()
            .domain([0, data.length -1])
            .range([0, w]);
        const yScale = d3.scaleLinear()
            .domain ([0, h])
            .range([h, 0])
        const generateScaledLine = d3.line()
            .x((d, i)=> xScale(i))
            .y(yScale)
            .curve(d3.curveCardinal);
        //setting the axes
        //setting up the data for the svg
        svg.selectAll('.line')
            .data([data])
            .join('path')
            .attr('d', d => generateScaledLine(d))
            .attr('fill', 'none')
            .attr('stroke', 'black')
    },[data])

    return(
        <Box bgcolor="lightcoral" flex={8} p={2}>
            <svg ref={svgRef}></svg>
        </Box>
    )
}

export default Feed;