
import { Link } from "react-router";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const About = () => {
  useDocumentTitle("About");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-sm shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            About AuctionX
          </h1>

          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-lg">
              Welcome to AuctionX — a full-stack web application designed
              to facilitate online bidding and auctions through a modern,
              responsive, and user-friendly platform.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Project Purpose
              </h2>
              <p>
                AuctionX demonstrates full-stack web development concepts,
                including real-time bidding, user authentication,
                authorization, database management, and marketplace
                workflows. The platform has been extended, customized,
                and redesigned to provide an improved auction experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Key Features
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>User registration and authentication</li>
                <li>Real-time auction bidding</li>
                <li>Item listing and auction management</li>
                <li>User profile management</li>
                <li>Admin dashboard and user management</li>
                <li>Responsive design for different devices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Project Developer
              </h2>
              <p>
                AuctionX is extended, customized, and maintained by{" "}
                <strong>Nitesh Yadav</strong>.
              </p>

              <div className="mt-4 p-4 bg-gray-50 rounded-sm">
                <p className="font-medium text-gray-900 mb-2">
                  Developer Information
                </p>

                <p>
                  <span className="font-medium">Name:</span> Nitesh Yadav
                </p>

                <p>
                  <span className="font-medium">GitHub:</span>{" "}
                  <a
                    href="https://github.com/nitesh-yadav14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    github.com/nitesh-yadav14
                  </a>
                </p>

                <p>
                  <span className="font-medium">Project Repository:</span>{" "}
                  <a
                    href="https://github.com/nitesh-yadav14/AuctionX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    github.com/nitesh-yadav14/AuctionX
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Technologies and Learning
              </h2>
              <p>
                This project provides practical exposure to modern
                frontend and backend development, REST APIs, database
                design, authentication, and real-time communication.
                It can also serve as a learning resource for students
                interested in building full-stack web applications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Open-Source Acknowledgment
              </h2>
              <p>
                AuctionX builds upon an existing open-source auction
                platform and includes independent extensions and
                customizations. The original MIT license and required
                copyright notices are retained in accordance with
                the license terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Getting Started
              </h2>
              <p>
                Visit the{" "}
                <a
                  href="https://github.com/nitesh-yadav14/AuctionX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  AuctionX GitHub repository
                </a>{" "}
                for installation instructions, project documentation,
                and setup guidance.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-center">
                Have questions or need support? Feel free to{" "}
                <Link
                  to="/contact"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  contact us
                </Link>{" "}
                for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
