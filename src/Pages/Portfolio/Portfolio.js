import React from 'react';
import ProjectCard from '../../Components/Project_Card';
import Box from "@material-ui/core/Box";

const styles={
  maxWidth: "70%",
}

export default function Portfolio() {
  return (
    <div  >
      <Box display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        p={1}
        m={15}
        bgcolor="background.paper"
        css={styles}
        justifyContent="space-between"  >
        <Box>
          <ProjectCard />
        </Box>
        <Box>
          <ProjectCard />
        </Box>
        <Box>
          <ProjectCard />
        </Box>

      </Box>

        
      
    </div>
  );
}
