import React from 'react';
import { IAgent } from 'types/Agent';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import AgentForm from '../Form';
import ReviewsIcon from '@mui/icons-material/Reviews';

interface AgentListProps {
  agents: (IAgent[]);
}

const List: React.FC<AgentListProps> = ({ agents }) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <div className="agents">
      {showModal && (
        <div className="modal show">
          <div className="modal-content">
            <AgentForm agent={agents[0]} />
            <button className="btn btn-danger closeButton" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Full Name</StyledTableCell>
              <StyledTableCell align="right">Agent License</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Practice Areas</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {agents.map((agent) => (
              <StyledTableRow key={agent.id}>
                <StyledTableCell component="th" scope="row">
                  {agent.id}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {agent.firstName} {agent.lastName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {agent.agentLicense}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {agent.address}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {agent.practiceAreas}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="outlined" onClick={handleButtonClick} startIcon={<VisibilitySharpIcon />}>
                    Show
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="outlined" onClick={handleButtonClick} startIcon={<ReviewsIcon />}>
                    Reviews
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
