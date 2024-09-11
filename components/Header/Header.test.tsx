import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "@/components/Header/Header";
import { SessionProvider } from "next-auth/react";

describe("Header", () => {
  it("renders the header with correct text", () => {
    render(
      <SessionProvider session={null}>
        <Header />
      </SessionProvider>
    );

    expect(screen.getByText("Je ma pelle Header")).toBeInTheDocument();
  });
});