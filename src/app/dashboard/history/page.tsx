import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
import { prismadb } from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { format } from "date-fns";

const History = async () => {
  // Get the user ID from authentication
  const { userId } = auth();

  // Fetch the history of AI outputs for the authenticated user from the database
  const userHistory = await prismadb.geminiOutput.findMany({
    where: {
      userId: userId as string, // Filter records by the current user's ID
    },
  });

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 px-4 rounded">
        {/* Display the title of the page */}
        <h2 className="text-3xl text-aqua font-bold">Output History</h2>
      </div>
      <div className="mt-5 py-6 px-4 rounded">
        <Table>
          {/* Caption for the table */}
          <TableCaption className="text-aqua">
            A list of your ai output history.
          </TableCaption>
          <TableHeader>
            <TableRow>
              {/* Header cells for the table */}
              <TableHead className="text-aqua">Template</TableHead>
              <TableHead className="w-[250px] text-aqua">Title</TableHead>
              <TableHead className="text-aqua">Description</TableHead>
              <TableHead className="text-aqua">Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Render rows of the table based on the user history */}
            {userHistory && userHistory.length > 0
              ? userHistory.map((history) => (
                  <TableRow key={history.id}>
                    {/* Display each field of the history item in the table */}
                    <TableCell className="text-aqua">
                      {history.templateUsed}
                    </TableCell>
                    <TableCell className="w-[250px] text-aqua">
                      {history.title}
                    </TableCell>
                    <TableCell className="whitespace-pre-wrap text-aqua">
                      {history.description}
                    </TableCell>
                    <TableCell className="text-aqua">
                      {/* Format and display the creation date of the history item */}
                      {format(history.createdAt, "MM/dd/yyyy")}
                    </TableCell>
                  </TableRow>
                ))
              : null}{" "}
            {/* If no history records, display nothing */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default History;
