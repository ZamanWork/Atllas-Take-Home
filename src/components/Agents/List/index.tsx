import React, { useState } from 'react';
import { IAgent } from 'types/Agent';
import Paper from '@mui/material/Paper';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Pagination } from '@mui/material';
import Review from 'components/Agents/Review/Form';
import AgentReviews from 'components/Agents/Review';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AgentInfo from 'components/Agents/Details';
import CustomButton from 'components/Shared/Button';
import Modal from 'components/Shared/Modal';

interface AgentListProps {
  agents: IAgent[];
}

const List: React.FC<AgentListProps> = ({ agents }) => {
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const agentsPerPage = 5;

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleReviewButtonClick = () => {
    setShowReviewModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleReviewModalClose = () => {
    setShowReviewModal(false);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
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

  const indexOfLastAgent = currentPage * agentsPerPage;
  const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
  const currentAgents = agents.slice(indexOfFirstAgent, indexOfLastAgent);
  const totalPages = Math.ceil(agents.length / agentsPerPage);

  return (
    <div>
      <div className='agents'>
        {showModal && (
          <Modal showModal={showModal} onClose={handleModalClose}>
            <AgentInfo agent={agents[1]} title='Agent Details' />
            <AgentReviews agent={agents[1]} />
          </Modal>
        )}

        {showReviewModal && (
          <Modal showModal={showReviewModal} onClose={handleReviewModalClose}>
            <Review review={agents[0]?.Reviews} agent={agents[1]} />
          </Modal>
        )}

        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 700, marginBottom: '60px' }}
            aria-label='customized table'
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align='right'>Full Name</StyledTableCell>
                <StyledTableCell align='right'>Agent License</StyledTableCell>
                <StyledTableCell align='right'>Address</StyledTableCell>
                <StyledTableCell align='right'>Practice Areas</StyledTableCell>
                <StyledTableCell align='right'></StyledTableCell>
                <StyledTableCell align='right'></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentAgents.map((agent) => (
                <StyledTableRow key={agent.id}>
                  <StyledTableCell component='th' scope='row'>
                    {agent.id}
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    {agent.firstName} {agent.lastName}
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    {agent.agentLicense}
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    {agent.address}
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    {agent.practiceAreas}
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    <CustomButton
                      className='btn btn-outline-info'
                      buttonText='Show'
                      icon={<VisibilitySharpIcon />}
                      onClick={handleButtonClick}
                    />
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    <CustomButton
                      className='btn btn-outline-warning'
                      buttonText='Reviews'
                      icon={<ReviewsIcon />}
                      onClick={handleReviewButtonClick}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className='pagination-container'>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color='primary'
          className='pagination'
        />
      </div>
    </div>
  );
};

export default List;
