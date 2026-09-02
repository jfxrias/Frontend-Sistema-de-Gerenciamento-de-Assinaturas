import Table from "react-bootstrap/Table";
import { MdOutlineEdit, MdRemoveCircleOutline } from "react-icons/md";
import { TableStyle } from "./style";

interface Dependente {
  id: number;
  nome: string;
  email: string;
}

interface TableComponentProps {
  dados?: Dependente[];
  onEdit: (dependente: Dependente) => void;
  onDeleteClick: (dependente: Dependente) => void;
}

function TableComponent({ dados = [], onEdit, onDeleteClick }: TableComponentProps) {
  return (
    <TableStyle>
      <div className="table-area">
        <Table hover striped>
          <thead>
            <tr>
              <th>Registro</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {dados.length > 0 ? (
              dados.map((dependente, index) => (
                <tr key={dependente.id}>
                  <td>{index + 1}</td>
                  <td>{dependente.nome}</td>
                  <td>{dependente.email}</td>
                  <td className="action-column">
                    <MdOutlineEdit 
                      style={{ cursor: "pointer", fontSize: "1.6rem", marginRight: "10px" }} 
                      onClick={() => onEdit(dependente)} 
                    />
                    <MdRemoveCircleOutline 
                      style={{ cursor: "pointer", fontSize: "1.6rem", color: "red" }} 
                      onClick={() => onDeleteClick(dependente)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4">Nenhum dependente encontrado.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </TableStyle>
  );
}

export default TableComponent;